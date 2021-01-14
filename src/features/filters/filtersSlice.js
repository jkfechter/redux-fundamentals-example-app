case 'filters/statusFilterChanged': {
    return {
      // Again, one less level of nesting to copy
      ...state,
      status: action.payload
    }
  }