export function setLoading(loading) {
    return {
      type: 'set-loading',
      payload: {isLoading: loading}
    }
}

export function setProduct(product){
    return {
      type: 'set-product',
      payload: product
    }
}