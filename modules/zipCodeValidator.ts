export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements Validation.StringValidation {
    isAccept(s: string): boolean {
        return s.length == 5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator};