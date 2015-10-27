describe("Tirangle", function() {
    
    describe(".isTriangle", function(){
        it("should properly identify valid triangles",function(){
            //è un caso di test
            var value1=TryAngle.isTriangle (1,1,1);
            var value2=TryAngle.isTriangle (2,3,4);
            var value3=TryAngle.isTriangle (2,4,2);
            //affinché dia successo, ogni caso di test deve essere di successo, senno da fail
            expect(value1).toBe(true);
            expect(value2).toBe(true);
            expect(value3).toBe(true);
        
        });
        it("should properly identify non-valid triangles", function(){
            var value = TryAngle.isTriangle(1,1,100);
            expect(value).toBe(false);
        });
    });
    
    describe(".getTypeBySidesLength", function(){
        it("should properly identify scalene triangles",function(){
            //è un caso di test
            var value=TryAngle.getTypeBySidesLength (2,3,4);
            expect(value).toBe(TryAngle.SIDE_SCALENE);
        });
        it("should properly identify isoseles triangles",function(){
            //è un caso di test
            var value=TryAngle.getTypeBySidesLength (2,4,2);
            expect(value).toBe(TryAngle.SIDE_ISOSCELES);
        });
        it("should properly identify equilateral triangles",function(){
            //è un caso di test
            var value=TryAngle.getTypeBySidesLength (1,1,1);
            expect(value).toBe(TryAngle.SIDE_EQUILATERAL);
        });    
    });
    
});
