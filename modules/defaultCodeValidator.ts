export default class DefaultCodeValidator{
    static numberRegexp = /^[0-9]+$/;
    
    isAccept(s: string){
        return s.length === 5 && DefaultCodeValidator.numberRegexp.test(s);
    }
}