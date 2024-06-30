# 0x01.ES6 Promises

### Background
---
- A promise is represents an operation that hasn't completed yet.
- Javascript is a single threaded language meaning you can not run two bits of scripts at the same time. One would have to wait for the other.
- Promise can be said to a bit of event listenes except:
  - It can only succeed or fail once, it can't switch from fail to success. It can't succeed or fail twice.
  - Regarless of the outcome of a promise, if you set a callback for sucess/failure, the correct callback will be called, even
    though the event took place earlier.
This is usefull for async success/failure, becuase of we are much interested in the reacting to the outcome not the time the outcome came up.

#### Terminologies
1. Fulfilled - The action in question succeeded
2. Rejected - The action in question faild
3. Pending - The action is neigther fulfilled or rejected
4. Settled - The action has fulfilled or rejected
