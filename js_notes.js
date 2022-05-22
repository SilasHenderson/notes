// nullish = null or undefinied
// Optional Chaining Operator: obj.undefined_prop returns undefined instead of error

obj = Proxy(obj, {
    get(obj, prop){
    },
    set(obj, prop, val){
    }
})
