import { Test, TestingModule} from '@nestjs/testing'
import { DemoController} from '../../../src/features/demo/demo.controller'


describe('DemoController', () => {
    let controller: DemoController;
    beforeEach(async () => {
        let module: TestingModule = await Test.createTestingModule({
            controllers: [DemoController]
        }).compile()
       controller = module.get<DemoController>(DemoController)
    })

    it('shoiuld be define demo controller', () => {
        expect(controller).toBeDefined()
    })
})