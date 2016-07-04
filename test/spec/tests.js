describe("Snake.js", function() {


  it("should bind to S global variable", function() {
    expect(window['S']).toEqual(jasmine.any(Object));
  });

  describe("array methods", function() {
        var myArray, myNumericArray;
        beforeEach(function() {
            myArray = ['a','b','c','d','e','f','g','h'];
            myNumericArray = [0.123,4,22,177,66.6,-1,-176,-123.456];
        });
        it("should return last element of array", function() {
            var myLast = S.last(myArray);
            expect(myLast).toEqual('h');
        });
        it("should return minimal value of numeric array", function() {
            var myMin = S.min(myNumericArray);
            expect(myMin).toEqual(-176);
        });
        it("should return maximal value of numeric array", function() {
            var myMin = S.max(myNumericArray);
            expect(myMin).toEqual(177);
        });
        it("should zip two arrays to a key-value object", function() {
            var myZip = S.zip(myArray,myNumericArray);
            var compareObj = {'a':0.123,'b':4,'c':22,'d':177,'e':66.6,'f':-1,'g':-176,'h':-123.456};
            expect(myZip).toEqual(compareObj);
        });
        it("should return true if element is present in array", function(){
            var myBool = S.in(myArray,'h');
            expect(myBool).toBe(true);
        });
        it("should return false if element is NOT present in array", function(){
            var mySecondBool = S.in(myArray,'z');
            expect(mySecondBool).toBe(false);
        });
  });

  describe("object methods", function() {
      var myObject;
      beforeEach(function() {
          myObject = {'a':1,'b':2,'c':3};
      });

      it("should get defined property of an object",function() {
          var myGet = S.get(myObject,'b');
          expect(myGet).toEqual(2);
      });

      it("should return null from get method, if property is not present and default_value not defined", function() {
          var myGet = S.get(myObject,'myProperty');
          expect(myGet).toBe(null);
      });

      it("should return default_value from get method, if property is not present and default_value is defined", function() {
          var myGet = S.get(myObject,'myProperty',-1);
          expect(myGet).toEqual(-1);
      });
      it("should return all object's values", function(){
          var myValues = S.values(myObject);
          expect(myValues).toEqual([1,2,3]);
      })
});

describe("string methods", function() {
   var myString;
  beforeEach(function() {
      myString = 'parselmouth';
  });

  it("should return true from startswith method, if string starts with specified string", function() {
      var myStart = S.startswith(myString,'parsel');
      expect(myStart).toBe(true);
  });

  it("should return false from startswith method, if string doesn't start with specified string", function() {
      var myStart = S.startswith(myString,'parsley');
      expect(myStart).toBe(false);
  });
  it("should return true from endswith method, if string ends with specified string", function() {
      var myStart = S.endswith(myString,'mouth');
      expect(myStart).toBe(true);
  });

  it("should return false from endswith method, if string doesn't end with specified string", function() {
      var myStart = S.endswith(myString,'moth');
      expect(myStart).toBe(false);
  });

});

describe("conversion methods", function() {

    it("should convert null to empty string", function() {
        expect(S.str(null)).toBe('');
    });

    it("should convert undefined to empty string", function() {
        expect(S.str(undefined)).toBe('');
    });

    it("should convert float to string", function() {
        expect(S.str(123.456)).toBe('123.456');
    });

    it("should convert integer to string", function() {
        expect(S.str(123)).toBe('123');
    });

    it("should convert non-parseInt value to zero by default", function() {
        expect(S.int(null)).toBe(0);
    });

    it("should convert non-parseInt value to given integer value", function() {
        expect(S.int(null,-1)).toBe(-1);
    });

    it("should convert comma-separated float string to real float",function() {
        expect(S._float('123,456')).toBe(123.456);
    });

    it("should convert non-parseFloat value to zero by default", function() {
        expect(S._float(null)).toBe(0);
    });

    it("should convert non-parseFloat value to given integer value", function() {
        expect(S._float(null,-1)).toBe(-1);
    });

});

});
