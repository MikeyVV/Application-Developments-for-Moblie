module Citizen {
    export function isValidID(id: string){
      var idString: string[] = id.split("")
      var idNumber: number[] = []
      var idSum: number = 0;
      
      for(var i:number = 0, k = 13;i < idString.length-1; i++,k--){
          idNumber[i]  = Number(idString[i])
            idSum += idNumber[i]*k
      }
      return 11 - (idSum%11) === Number(idString[idString.length-1])
    }
}
export = Citizen