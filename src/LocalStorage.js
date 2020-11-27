export const LocalStorage = {
    storageKey: "the_number_of_visiting",
  
    setLocalstorage: (data) => {
      window.localStorage.setItem(
        LocalStorage.storageKey,
        JSON.stringify(data)
      );
    },
  
    getLocalstorage: () => {
      let tmpData = window.localStorage.getItem(LocalStorage.storageKey)
      if (tmpData) {
        let obj = JSON.parse(tmpData)
        return JSON.parse(tmpData)
      } else {
        LocalStorage.setLocalstorage({numberOfVisiting:0})
        return {numberOfVisiting:0}
      }
    },
  
    increase: ()=>{
      console.log('In LocalStorage.increase')
      let tmp = LocalStorage.getLocalstorage()
      tmp = {
        numberOfVisiting: tmp.numberOfVisiting + 1
      }
      LocalStorage.setLocalstorage(tmp)
    },
  }
  