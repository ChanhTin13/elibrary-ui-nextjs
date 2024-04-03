'use client';

import PowerTable from '@/components/powerTable';
import { Select } from 'antd';
import React from 'react';

export default function Statistic() {
    
	const { Option } = Select;
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            address2: '10 Downing Street',
            address3: '10 Downing Street',
            address4: '10 Downing Street',
            address5: '10 Downing Street',
        }, 
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            address2: '10 Downing Street',
            address3: '10 Downing Street',
            address4: '10 Downing Street',
            address5: '10 Downing Street',
        } ,
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            address2: '10 Downing Street',
            address3: '10 Downing Street',
            address4: '10 Downing Street',
            address5: '10 Downing Street',
        } ,
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            address2: '10 Downing Street',
            address3: '10 Downing Street',
            address4: '10 Downing Street',
            address5: '10 Downing Street',
        } ,
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            address2: '10 Downing Street',
            address3: '10 Downing Street',
            address4: '10 Downing Street',
            address5: '10 Downing Street',
        } ,
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            address2: '10 Downing Street',
            address3: '10 Downing Street',
            address4: '10 Downing Street',
            address5: '10 Downing Street',
        } ,
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            address2: '10 Downing Street',
            address3: '10 Downing Street',
            address4: '10 Downing Street',
            address5: '10 Downing Street',
        } 
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
			width: 100,
            fixed: 'left', 
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
			width: 100, 
            fixed: 'left', 
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
			width: 400,
        },
        {
            title: 'Address2',
            dataIndex: 'address2',
            key: 'address2',
			width: 300,
        },
        {
            title: 'Address3',
            dataIndex: 'address3',
            key: 'address3',
			width: 500,
        },
        {
            title: 'Address4',
            dataIndex: 'address4',
            key: 'address4',
			width: 100,
            fixed: 'right',
        },
        {
            title: 'Address5',
            dataIndex: 'address5',
            key: 'address5',
			width: 100,
            fixed: 'right',
        },
    ];
    return ( 
        <div className="container-fluid">
            <h1>Statistic</h1>
            <PowerTable
                columns={columns}
                dataSource={dataSource}
                pagination={{ current: 1, pageSize: 20 }} 
                Extra={
                    <div className='flex'>
                        <div>Search</div>
					<Select className="style-input" defaultValue={0} style={{ width: 150 }}  >
						<Option value={0}>Option 1</Option>
						<Option value={1}>Option 2</Option>
						<Option value={2}>Option 3</Option>
					</Select></div>
				}

            />
        </div>
    );
}
