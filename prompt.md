1. 假设你是一名资深的软件工程师，我正在开发一个前端的停车场页面，暂时先把页面划分成三个组件，一个大组件ParkingLot里面包含着两个小组件，一个组件是ParkingLotOperator，一个组件是ParkingLotSlot，先不要具体实现页面，把组件的结构构建好，并在APP.js中渲染ParkingLot大组件，所有组件使用 const xxx=()的格式定义

2. 现在我们在ParkingLotSlot中模拟一些数据，1、假设我有三个停车场，他们分别叫The Plaza Park（9个容量），City Mall Garage（12个容量），Office Tower Parking（9个容量），为每一个停车场画一个表格来展示停车场的停车情况，比如容量为9的停车场就画一个3*3的表格，容量为12的停车场就画一个3*4的表格，以此类推，注意不要展现表格最外面的边框，但是内侧的边框要展示，且三个停车场要在同一行，并在每个停车场下方展示停车场的名称；2、使用3个数组来模拟每一个停车场的情况，比如The Plaza Park停了两辆车，就在第一个格子和第二个格子画x，其他格子保证空白，City Mall Garage停了三辆车，就在第一行的三个格子画x,Office Tower Parking 9 个格子都是空白的

3. 现在尝试把停车场中有车的情况x换成一个组件，它的形状的有圆角的长方形，底色是#b0f2b8,内容展示车牌号，可以调整模拟数据中数组的属性

4. CarSlot这个组件没有车辆的情况和有车辆的情况保证大小一样

5. CarSlot组件的每一个停车位格子能不能调大一点，希望车牌信息展示可以在一行内展示，不希望有换行的情况

6. 现在我们来实现ParkingLotOperator，这个组件里面有几个元素；
   1；输入框，它的label是PlateNumber，使用useState维持一个变量plateNumber，当输入框内容变化时把plateNumber更新
   2；下拉框，它的选项有Standard，Smart，SuperSmart 这里用 setState维持一个变量parkingStrategy，当下拉框内容变化时把parkingStrategy更新
   3；button，内容是park，当按下按钮时打印日志，打印plateNumber和parkingStrategy的值
   4；button，内容是fetch，当按下按钮时打印日志，打印plateNumber的值
   4个元素都在同一行，并且每一个元素之间有一定间距，元素中的内容和元素本身也有一定间距（使用padding），两个按钮的底色是#a7d9te

7. ParkingLotOperator的四个元素居中

8. 将CarSlot的css样式抽取出来，放到CarSlot.css文件中

9. 将ParkingLotOperator的css样式抽取出来，放到ParkingLotOperator.css文件里面

10. 将ParkingLotSlot的css样式抽取出来，放到ParkingLotSlot.css文件里

11. 提供parking.js文件，对以下Controller的接口进行调用，并返回response.data:

    ```java
    package org.afs.pakinglot.domain.controller;
    
    import org.afs.pakinglot.domain.entity.Car;
    import org.afs.pakinglot.domain.entity.ParkingLot;
    import org.afs.pakinglot.domain.entity.dto.TicketDto;
    import org.afs.pakinglot.domain.entity.vo.ParkingLotVo;
    import org.afs.pakinglot.domain.entity.vo.TicketVo;
    import org.afs.pakinglot.domain.service.ParkingService;
    import org.springframework.web.bind.annotation.*;
    
    import java.util.List;
    
    @RestController
    @RequestMapping("/parking")
    @CrossOrigin
    public class ParkingController {
    	private ParkingService parkingService;
    
        public ParkingController(ParkingService parkingService) {
            this.parkingService = parkingService;
        }
    
        @GetMapping("/strategy")
        public List<String> getParkingStrategy() {
            return parkingService.getParkingStrategy();
        }
    
        @GetMapping
        public List<ParkingLotVo> getParkingLots() {
            return parkingService.getParkingLots();
        }
    
        @PostMapping("/park/{strategy}")
        public TicketVo park(@RequestBody Car car, @PathVariable String strategy) 	  {
            return parkingService.park(car, strategy);
        }
    
        @PostMapping("/fetch")
        public TicketVo fetch(@RequestBody TicketDto ticket) {
            return parkingService.fetch(ticket);
        }
    
        @PostMapping
        public ParkingLot addParkingLot(@RequestBody ParkingLot parkingLot) {
            return parkingService.addParkingLot(parkingLot);
        }
    }
    ```
    12. parking.js的getParkingStrategy接口返回json数据：
        ```json
        [
            "SuperSmart",
            "Standard",
            "Smart"
        ]
        
        ```

        该数据用于在ParkingLotOperator的label下拉框的option里展示，返回几个字符串就对应几个option，用于替换原先jsx文件里写死的三个option值

    13. parking.js的getParkingLots接口返回json数据例子为:
        ```json
        [
            {
                "id": 1,
                "name": "The Palza Park",
                "capacity": 9,
                "currentSlots": 1,
                "tickets": [
                    {
                        "id": 4,
                        "parkingLotId": 1,
                        "plateNumber": "BC-1213",
                        "position": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "City Mall Garage",
                "capacity": 12,
                "currentSlots": 3,
                "tickets": [
                    {
                        "id": 1,
                        "parkingLotId": 2,
                        "plateNumber": "AB-1111",
                        "position": 1
                    },
                    {
                        "id": 2,
                        "parkingLotId": 2,
                        "plateNumber": "AC-1111",
                        "position": 2
                    },
                    {
                        "id": 3,
                        "parkingLotId": 2,
                        "plateNumber": "AC-1113",
                        "position": 3
                    }
                ]
            },
            {
                "id": 3,
                "name": "Office Tower Parking",
                "capacity": 9,
                "currentSlots": 1,
                "tickets": [
                    {
                        "id": 5,
                        "parkingLotId": 3,
                        "plateNumber": "AC-1000",
                        "position": 1
                    }
                ]
            }
        ]
        ```

        如果具体一个停车场实例的tickets字段为空则表示该停车场没有停车辆；该接口返回的数据可以使用useReducer放到parkingContext里面，ParkingLotSlot.jsx页面使用该数据替换原先写死在代码里的parkingLots数据

    14. parking.js里的parkCar接口返回的数据格式:
        ```json
        {
            "id": 5,
            "parkingLotId": 3,
            "plateNumber": "AC-1000",
            "position": 1
        }
        ```

        在ParkingLotOperator.jsx文件里面，通过点击park按钮，发起请求，将plate Number和下拉框选中的parkingStrategy作为参数进行请求的发送；将响应返回的plateNumber信息放到parkingLotId对应的停车场的对应position位置，比如一个停车场有9个位置，position为1则表示停在停车场的第一个位置

    15. ParkingLotOperator的输入框里输入的plateNumber需要做校验，格式为两个大写英文字母横杠四个阿拉伯数字，格式不对进行弹窗提示，并且清空输入框内容

    16. parking.js里的fetchCar接口返回数据为：
        ```json
        {
            "id": 1,
            "parkingLotId": 2,
            "plateNumber": "AB-1111",
            "position": 1
        }
        ```

        在ParkingLotOperator里填写plateNumber，点击fetch按钮进行请求发送，同时有park时的校验逻辑，根据返回数据的parkingLotId在对应的停车场里面，移除对应的车辆，并进行数据展示

    17. handleFetch和handlePark做个判空处理