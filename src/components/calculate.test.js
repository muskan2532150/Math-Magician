import calculate from "./logic/Calculate";

describe('Test calculate function',()=>{
    it('Test for +',()=>{

        const obj = {
            total:'2',
            next:'2',
            operation:'+'
            }
            
        const output = {
            total:'4',
            next:null,
           operation:'+'
        }
    const btn = '+';
    const result = calculate(obj,btn)
    expect(result).toEqual(output);
    });
    
    it('Test for -',()=>{
        const obj = {
            total:'2',
            next:'2',
            operation:'-'
            }
            
        const output = {
            total:'0',
            next:null,
           operation:'-'
        }
        const btn = '-';
        const result = calculate(obj,btn)
        expect(result).toEqual(output);
        });

        it('Test for x',()=>{
            const obj = {
                total:'2',
                next:'2',
                operation:'x'
                }
                
            const output = {
                total:'4',
                next:null,
               operation:'x'
            }
            const btn = 'x';
            const result = calculate(obj,btn)
            expect(result).toEqual(output);
            });

            it('Test for ÷',()=>{
                const obj = {
                    total:'2',
                    next:'2',
                    operation:'÷'
                    }
                    
                const output = {
                    total:'1',
                    next:null,
                   operation:'÷'
                }
                const btn = '÷';
                const result = calculate(obj,btn)
                expect(result).toEqual(output);
                });

                it('Test for AC',()=>{
                    const obj = {
                        total:'2',
                        next:'2',
                        operation:'AC'
                        }
                        
                    const output = {
                        total:null,
                        next:null,
                       operation:null
                    }
                    const btn = 'AC';
                    const result = calculate(obj,btn)
                    expect(result).toEqual(output);
                    });

                    it('Test for +/-',()=>{
                        const obj = {
                            total:'0',
                            next:'2',
                            operation:'+/-'
                            }
                            
                        const output = {
                            total:'0',
                            next:'-2',
                           operation:'+/-'
                        }
                        const btn = '+/-';
                        const result = calculate(obj,btn)
                        expect(result).toEqual(output);
                        });

})


