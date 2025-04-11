import { CirclePlus, Sun } from 'lucide-react';
import { Switch , DatePicker,Radio} from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

export default function Header() {


  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
      console.log('Clear');
    }
  };
  const rangePresets = [
    { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
    { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
    { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
    { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
  ];
  return (
    <>
    <div className=" p-4 flex justify-between ">
      <h1 className="flex justify-between items-center text-xl font-bold text-red-500">Appointments</h1>
      <div className="flex items-center gap-2">
        <Sun className="h-5 w-5" />
        <Switch defaultChecked onChange={()=>{console.log('changing dark mode ');
        }} />
        <span className="text-sm">Apply Dark Theme</span>   
      </div>
   
    </div>
    <div className='flex justify-between mr-4 ml-4'>
      <div>
      <RangePicker presets={rangePresets} onChange={onRangeChange} />

      </div>
      <div>
        {'month'}
      </div>
      <div className='flex'>
         <CirclePlus  className='mr-10 mt-1'/>
      <Radio.Group value={'WEEK'} onChange={(e)=>{console.log(e.target.value)}} style={{ marginBottom: 16 }}>
        <Radio.Button value="DAY">DAY</Radio.Button>
        <Radio.Button value="WEEK">WEEK</Radio.Button>
        <Radio.Button value="MONTH">MONTH</Radio.Button>
      </Radio.Group>
      </div>
    </div>
    </>
  );
}