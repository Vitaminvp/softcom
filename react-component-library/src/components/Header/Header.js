import React from 'react';
import './header.scss';

import LimitedTextarea from '../../libs/LimitedTextarea/LimitedTextarea';
import Ticker from '../../libs/Ticker/Ticker';
import Carousel from '../../libs/Carousel/Carousel';
import Toggle from '../../libs/Toggle/Toggle';
import ModalDialog from '../../libs/ModalDialog/ModalDialog';
import MappedTable from '../../libs/MappedTable/MappedTable';
import PasswordRevealer from '../../libs/PasswordRevealer/PasswordRevealer';
import Mailto from '../../libs/Mailto/Mailto';
import DataList from '../../libs/DataList/DataList';
import AutoLink from '../../libs/AutoLink/AutoLink';
import Tab, { TabItem } from '../../libs/Tab/Tab';
import Collapse from '../../libs/Collapse/Collapse';
import Input from '../../libs/Input/Input';
import TextArea from '../../libs/TextArea/TextArea';
import Select from '../../libs/Select/Select';
import Tooltip from '../../libs/Tooltip/Tooltip';
import FileDrop from '../../libs/FileDrop/FileDrop';
import TreeView from '../../libs/TreeView/TreeView';


const Header = () => {
    let data = {
        lorem: {
            ipsum: "dolor sit",
            amet: {
                consectetur: "adipiscing",
                elit: [
                    "duis",
                    "vitae",
                    {
                        semper: "orci"
                    },
                    {
                        est: "sed ornare"
                    },
                    "etiam",
                    ["laoreet", "tincidunt"],
                    ["vestibulum", "ante"]
                ]
            },
            ipsum: "primis"
        }
    };




    //ModalDialog
    // every time you wanna call the dialog
    // content is a jsx element
    // ModalDialog.show({
    //     title: 'Hello, world!',
    //     closeOnClick: true,
    //     content: <img src="https://github.com/30-seconds/30-seconds-of-react/blob/master/logo.png"/>
    // });
    //ModalDialog

    //MappedTable
    const people = [
        { name: 'John', surname: 'Smith', age: 42 },
        { name: 'Adam', surname: 'Smith', gender: 'male' }
    ];
    const propertyNames = ['name', 'surname', 'age'];
    //MappedTable
    //DataList
    const names = ['John', 'Paul', 'Mary'];
    //DataList
    //Select
    let choices = [
        ['grapefruit', 'Grapefruit'],
        ['lime', 'Lime'],
        ['coconut', 'Coconut'],
        ['mango', 'Mango']
    ];
    //Select
    return <header className="header" >
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <Carousel
                            carouselItems={[
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos illo, laudantium maxime nisi porro!</div>,
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor doloribus dolorum eum explicabo facere iusto modi quasi sequi voluptates.</div>,
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae debitis dolores esse facilis maxime molestiae odit, optio pariatur possimus praesentium quod rem suscipit voluptatum.</div>
                            ]}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <LimitedTextarea limit={32} value='Hello!' />
                    </div>
                    <div className="col-12">
                        <Ticker times={15} interval={1000} />
                    </div>
                    <div className="col-12">
                        <Toggle />
                    </div>
                    <div className="col-12">
                        <MappedTable data={people} propertyNames={propertyNames} />
                    </div>
                    <div className="col-12">
                        <PasswordRevealer />
                    </div>
                    <div className="col-12">
                        <Mailto email="foo@bar.baz" subject="Hello" body="Hello world!">
                            Mail me!
                        </Mailto>
                    </div>
                    <div className="col-12">
                        <DataList data={names}/>
                        <DataList data={names} isOrdered />
                    </div>
                    <div className="col-12">
                        <AutoLink text='foo bar baz http://example.org bar' />
                    </div>
                    <div className="col-12">
                        <Tab defaultIndex="1" onTabClick={console.log}>
                            <TabItem label="A" index="1">
                                Lorem ipsum
                            </TabItem>
                            <TabItem label="B" index="2">
                                Dolor sit amet
                            </TabItem>
                            <TabItem label="C" index="3">
                                Lorem ipsum dolor sit amet.
                            </TabItem>
                        </Tab>
                    </div>
                    <div className="col-12">
                        <Collapse>
                            <h1>This is a collapse</h1>
                            <p>Hello world!</p>
                        </Collapse>
                    </div>
                    <div className="col-12">
                        <Input type='text' placeholder='Insert some text here...' callback={(val) => console.log(val)}/>
                    </div>
                    <div className="col-12">
                        <TextArea placeholder='Insert some text here...' callback={(val) => console.log(val)}/>
                    </div>
                    <div className="col-12">
                        <Select values={choices} selected='lime' callback={(val) => console.log(val)}/>
                    </div>
                    <div className="col-12">
                        <Tooltip text='Simple tooltip'>
                            <button>Hover me!</button>
                        </Tooltip>
                    </div>
                    <div className="col-12">
                        <ModalDialog />
                        {ModalDialog.show({
                            title: 'Hello, world!',
                            closeOnClick: true,
                            content: <img src="https://github.com/30-seconds/30-seconds-of-react/blob/master/logo.png"/>
                        })}
                    </div>
                    <div className="col-12">
                        <FileDrop handleDrop={console.log}/>
                    </div>
                    <div className="col-12">
                        <TreeView data={data} name='data'/>
                    </div>
                </div>
            </div>
        </header>;
};

export default Header;