# connect4lambda

basic lambda that will take in an array of column moves and return a new valid move (it's not smart, it does a random available move).



**Base URL** `https://q471hkjdga.execute-api.us-west-2.amazonaws.com/default/connect4`

**URL** : `/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Allowed Query Params** 
```
{ 
  moves: { 
    required: true,
    description: current state of game with each array item representing a column that has a token placed in it
    example: '[1,2,0, 0]' (two tokens in column 0, one in columns 1 and 2)
  }, 
  size: {
    required: false,
    description: the height of the columns,
    example: '4'
  }
}
```

## Success Responses

**Condition** : User can not see any Accounts.

**Code** : `200 OK`

**Content** : `[1,0,0,1]`: moves array with an additional move

## Error Response

**Condition** : One or more of the columns is overloaded or would be overloaded by the next move.

**Code** : `400`

**Content** : `Column is overloaded`
