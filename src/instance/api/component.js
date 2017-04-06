// component related interface
export default function(Van) {

  // create a new component instance
  // param is a object or function
  Van.prototype.newInstance = function() {

    // get param
    var param = arguments[0];
    var instance = Van.component(this.$options);
    instance.$isInstance = true;
    if (!param) {
      return instance;
    }

    // if it's a function ,excute it
    // else if it's a object
    if (typeof param === 'function') {
      param.call(instance);
    } else {
      instance.data = param;
    }
    return instance;
  };
}