# Some Important Points

## using numpy
#### how to calculate mean, mode and median?

```py
import numpy as np
import scipy import stats
expenditure = np.random.normal(25000, 15000, 10000)
np.mean(expenditure) # MEAN
np.median(expenditure) #MEDIAN
expenditure = np.random.randint(15, high=50, size=200)
stats.mode(expenditure)
```

`
24820.02338888958
24691.98032372038
`

#### 



#### variance 

```py
import numpy as np
results = [3,3,3,5,6,1]
np.var(results)

```

`
2.5833333333333335
`

#### standard deviation

```py
np.std(results
```

`
1.6072751268321592
`
