import {CalculatorService} from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';


describe('CalculatorService',()=>{

    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(()=>{
        console.log("Calling beforeEach");
        loggerSpy = jasmine.createSpyObj('LoggerService',["log"]);
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        });
        //calculator = new CalculatorService(loggerSpy);
        calculator = TestBed.get(CalculatorService);
        
    });
    it('should add two numbers',() =>{
        console.log("add test");
        //to make sure logger is only called once in out method
        //const logger = new LoggerService();
        // to be more effeciant we need to not use an actual instance
        // to do so let's use spy
        //const logger = jasmine.createSpyObj('LoggerService',["log"]);
        
        // we want to spy on logger, 'log' is the name of the method in logger
        // spyOn can be removed here since we are using a spyOnObject instead 
        //spyOn(logger, 'log');
        // the constructor requires you to add the logger but it's different in other cases
        //const calculator = new CalculatorService(logger);
        const result = calculator.add(2,2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers',() =>{
        console.log("subtract test")
        const result = calculator.subtract(2,2);
        expect(result).toBe(0);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
})