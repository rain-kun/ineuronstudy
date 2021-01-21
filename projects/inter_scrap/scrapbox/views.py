from django.shortcuts import render
from .models import Review
from django.utils.timezone import now
from django.views.decorators.csrf import csrf_exempt

# for scrapping
from bs4 import BeautifulSoup as bs
from urllib.request import urlopen as uReq
# Create your views here.

# api
from rest_framework import status
from . serializers import ReviewSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

"""
THE FOLLOWING PROGRAME CODE BELONGS TO ASHUTOSH VISHU YADAV UNDER GNU General Public License v3.0
view for scrapping the reviews  | BASED ON INEURON ML COURSE
"""

# @csrf_exempt
@api_view(['GET', ])
def scrap(request, search_string):
    if request.method == "GET":
        # TODO: setting all the right form variables correctly.
        # search_string = request.get("search")  #request.form['content'].replace(" ", "")
        # kind = request.form['kind'].replace(" ", "")
        # website = request.form['website'].replace(" ", "")
        # search_string = request.POST.get('search_string')
        print(search_string)
        try:
            reviews = Review.objects.filter(product=search_string.replace(' ', ""))
        except Review.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if reviews.count() > 0 and reviews.first().scraped_on.date().year >= now().date().year:  # check if scraped \n
            if reviews.first().scraped_on.date().month >= now().date().month:  # reviews are latest or not
                # and reviews.first().scraped_on.date().day >= now().date().day
                serializer = ReviewSerializer(reviews, many=True)  # serialize the reviews
                return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            if reviews.count() > 0:
                reviews.delete()  # if reviews are not latest DELETE THEM
            flipkart_url = "https://www.flipkart.com/search?q=" + search_string
            u_client = uReq(flipkart_url)  # requesting the webpage from the internet
            flip_kart_page = u_client.read()
            u_client.close()  # closing the connection to the web server
            flipkart_html = bs(flip_kart_page, "html.parser")
            big_boxes = flipkart_html.findAll("div", {"class": "_2pi5LC col-12-12"})
            del big_boxes[0:3]
            box = big_boxes[2]
            product_link = "https://www.flipkart.com" + box.div.div.div.a['href']
            prod_res = uReq(product_link)
            product_page = prod_res.read()
            prod_res.close()
            prod_html = bs(product_page, "html.parser")
            comment_boxes = prod_html.find_all('div', {'class': "_16PBlm"})
            # reviews = []
            for comment_box in comment_boxes:
                try:
                    name = comment_box.div.div.find_all('p', {'class': '_2sc7ZR _2V5EHH'})[0].text

                except:
                    name = 'No Name'

                try:
                    rating = comment_box.div.div.div.div.text

                except:
                    rating = 'No Rating'

                try:
                    comment_head = comment_box.div.div.div.p.text
                except:
                    comment_head = 'No Comment Heading'
                try:
                    com_tag = comment_box.div.div.find_all('div', {'class': ''})
                    cust_comment = com_tag[0].div.text
                except:
                    cust_comment = 'No Customer Comment'
                # mydict = {"Product": search_string, "Name": name, "Rating": rating, "comment_head": comment_head,
                #           "Comment": cust_comment}

                # SAVE reviews in DATABASE
                try:
                    review = Review.objects.create(product=search_string.replace(' ', ""), customer=name, rating=rating,
                                                   heading=comment_head, comment=cust_comment)
                except:
                    print("something went wrong while creating the database")

                review.save()
                # reviews.append(mydict)  # appending the comments to the review list

            try:
                reviews = Review.objects.filter(product=search_string.replace(' ', ""))  # get the reviews
            except Review.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = ReviewSerializer(reviews, many=True)  # serialize the reviews
            return Response(serializer.data, status=status.HTTP_200_OK)
            # return render(request, 'results.html', {
            #     "reviews": reviews,
            # })  # showing the review to the user

        # whichweb = InterWebsites.objects.get(name=website)
        # whichinter = InterShip.objects.filter(website=whichweb, kind=kind)
        # if whichinter.count() > 0 and whichinter.first().scraped_on.date().day < now().date().day \
        #         and whichinter.first().scraped_on.date().month < now().date().month:
        #     return render(request, 'temp.html', {
        #         "InterShips": whichinter,
        #     })
        # else:
        # search_url = whichweb.url + "?q={q}".format(q=kind)
    else:
        return Response({
            "error": "needs post request to work",
        }, status=status.HTTP_404_NOT_FOUND)
