/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-restricted-imports */
import React, { useState, useEffect,useReducer  } from 'react'
import Drawer from '@material-ui/core/Drawer';
import { Formik, Field } from 'formik';
import { Row, Col, Button, Card, InputGroup, FormControl, Form } from "react-bootstrap";
import SelectField from '../../../../_metronic/_partials/controls/forms/SelectField';
import DatePicker from "react-datepicker";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { Checkbox } from "../../../../_metronic/_partials/controls";
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import * as constant from "../../../../redux/constants/DashboardConstants";
import { FetchFilterlist,FetchChannellist,FetchCountrylist,FetchCategorylist,FetchBrandlist,FetchPrioritylist,FetchPublisherlist,FetchStatuslist } from "../../../../redux/actions/CommonActions"
import {FetchDASHBOARDChannelData} from "../../../../redux/actions/DashboardActions"
import moment from 'moment';
import { connect } from 'react-redux'
import { values } from 'lodash'


 const FilterDrawer = ({category_list,
    channel_list,
    priority_list,
    publisher_list,
    status_list,
    country_name,
     brand_list}) => {
        const packageName = localStorage.getItem('dpackage');
        const dispatch = useDispatch()
        const [panel, setPanel] = useState(true);
        
  




 const [channels, setChannels] = useState(
  { channels: []}
 );
    const [categories, setCategories] = useState(  { categories: []});
    const [publishers, setPublishers] = useState({ publishers: []});
    const [countries, setCountries] = useState({countries:[]});
    const [brands, setBrands] = useState({brands:[]});
    const [priorities, setPriorities] = useState({priorities:[]});
    const [status, setStatus] = useState({status:[]});
    const [valuedefined, setValuedefined] = useState({
        workDays: []
    });

    const [dashboarddata, setDashboarddata] = useState(
        {
           
        }
         );

        const toggleDrawer = (e) => {
            setPanel(false)
        }


        



        const handleCheckbox = (event) => {
            const { name, checked ,value} = event.target
            const test = dashboarddata && dashboarddata.name
            && dashboarddata.name.filter(x =>  x !== value ? x : null )
setDashboarddata(
    channels
)


  if(checked){
 
    if(name=='channels' && checked){
      setChannels((prevState) => (
        {

                 'channels' : [...prevState['channels'],value]
        }))
        

      }
      if(name=='categories' && checked){
        setCategories((prevState) => (
          {
  
                   'categories' : [...prevState['categories'],value]
          }))
        }
        if(name=='publishers' && checked){
          setPublishers((prevState) => (
            {
    
                     'publishers' : [...prevState['publishers'],value]
            }))
          }
        if(name=='countries' && checked){
          setCountries((prevState) => (
            {
    
                     'countries' : [...prevState['countries'],value]
            }))
          }
        if(name=='brands' && checked){
          setBrands((prevState) => (
            {
    
                     'brands' : [...prevState['brands'],value]
            }))
          }
        if(name=='priorities' && checked){
          setPriorities((prevState) => (
            {
    
                     'priorities' : [...prevState['priorities'],value]
            }))
          }
        } 
        
        else {
          if(channels && channels['channels'].includes(value)){
            setChannels((prevState) => (
              {
          
                 'channels': prevState['channels'] && prevState['channels'].filter(x =>  x !== value ? x : null )
              })
            )
          }

          if(categories && categories['categories'].includes(value)){
            setCategories((prevState) => (
              {
          
                 'categories': prevState['categories'] && prevState['categories'].filter(x =>  x !== value ? x : null )
              })
            )
          }

if(publishers && publishers['publishers'].includes(value)){
  setPublishers((prevState) => (
    {

       'publishers': prevState['publishers'] && prevState['publishers'].filter(x =>  x !== value ? x : null )
    })
  )
}
if(brands && brands['brands'].includes(value)){
  setBrands((prevState) => (
    {

       'brands': prevState['brands'] && prevState['brands'].filter(x =>  x !== value ? x : null )
    })
  )
}
if(countries && countries['countries'].includes(value)){
  setCountries((prevState) => (
    {

       'countries': prevState['countries'] && prevState['countries'].filter(x =>  x !== value ? x : null )
    })
  )
}
if(priorities && priorities['priorities'].includes(value)){
  setPriorities((prevState) => (
    {

       'priorities': prevState['priorities'] && prevState['priorities'].filter(x =>  x !== value ? x : null )
    })
  )
}
            
        }
  }
    
 
     
       
    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        root: {
            width: '100%',
        },
        icon: {
            verticalAlign: 'bottom',
            height: 20,
            width: 20,
        },
        details: {
            alignItems: 'center',
        },
        column: {
            flexBasis: '33.33%',

        },
    });
    const [filters,setFilters] = useState({
        packageName: '',
        fromDate: '2021-01-10',
        toDate: '2022-01-10',
        brand: 'all',
        category: 'all',
        country: 'all',
        publisher: 'all',  
        status:'all',
        channel:'all',
        priority:'all'
      })
    const date = new Date();
    const weekstartdate = date.setDate(date.getDate() - 6)
    const [startDate, setStartDate] = useState(weekstartdate);
    const [endDate, setEndDate] = useState(new Date());
    const classes = useStyles();
    localStorage.setItem("startDate", '2020-05-03');
    localStorage.setItem("endDate", moment(new Date(endDate)).format('YYYY-MM-DD'));
    // localStorage.setItem("startDate", moment(new Date(startDate)).format('YYYY-MM-DD'));
    // localStorage.setItem("endDate", moment(new Date(endDate)).format('YYYY-MM-DD'));

    useEffect(() => {
        if (brand_list && country_name  && priority_list  && status_list  && category_list  && channel_list   && publisher_list ) 
        {
        setFilters((value) => ({
           ...value,
           brand: brand_list ,
           country : country_name ,
          priority:priority_list ,
           status:status_list ,
           category:category_list ,
           channel:channel_list ,
           publisher:publisher_list 
         }))
        
           }
    
           
           
         }, [brand_list && brand_list ,country_name && country_name ,priority_list && priority_list  ,status_list && status_list  , category_list && category_list  , channel_list && channel_list  , publisher_list && publisher_list ]
         )
        
    useEffect(() => {
        // dispatch(FetchFilterlist(packageName))
        // dispatch(FetchMenulist(e.value))
        dispatch(FetchCountrylist(packageName,'2020-01-10','2022-01-10'))
         dispatch(FetchCategorylist(packageName,'2020-01-10','2022-01-10'))
        dispatch(FetchChannellist(packageName,'2020-01-10','2022-01-10'))
       dispatch(FetchBrandlist(packageName,'2020-01-10','2022-01-10')) 
          dispatch(FetchPrioritylist(packageName,'2020-01-10','2022-01-10'))
         dispatch(FetchPublisherlist(packageName,'2020-01-10','2022-01-10'))
         dispatch(FetchStatuslist(packageName,'2020-01-10','2022-01-10'))

    }, [])
    useEffect(() => {
        if (brand_list  && country_name  && priority_list  && status_list  && category_list  && channel_list   && publisher_list ) 
        {
        setFilters((value) => ({
           ...value,
           brand: brand_list ,
           country : country_name ,
          priority:priority_list ,
           status:status_list ,
           category:category_list ,
           channel:channel_list ,
           publisher:publisher_list 
         }))
        
           }


           
           
         }, [brand_list && brand_list ,country_name && country_name ,priority_list && priority_list  ,status_list && status_list  , category_list && category_list  , channel_list && channel_list  , publisher_list && publisher_list ]
         )
   
        
        const getBrand = filters && filters.brand && filters.brand.data
        && filters.brand.data ? filters.brand.data : []

        const getChannel = filters && filters.channel && filters.channel.data
        && filters.channel.data ? filters.channel.data : []

        const getCategory = filters && filters.category && filters.category.data
        && filters.category.data ? filters.category.data : []

        const getPublisher = filters && filters.publisher && filters.publisher.data
        && filters.publisher.data ? filters.publisher.data : []

        const getCountry = filters && filters.country && filters.country.data
        && filters.country.data ? filters.country.data : []

        const getPriorities = filters && filters.priority && filters.priority.data
        && filters.priority.data ? filters.priority.data : []



        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('channelsjkbkjbkj',channels);
            console.log('submitttinggggggggg');
            // localStorage.setItem('channels', JSON.stringify(channels))
            // console.log('propssss',props);
            //  props.onSubmit(channels);
          }
          const initialState = {
       channels
          }
          function Reducer(state = initialState, { type, response }) {
            switch (type) {
              
              case constant.DASHBOARD_DATA:
                // console.log('action',action.type)
                console.log('response',response)
              return {    ...state,
                    dashboard_data_loading: true,
                    dashboard_data: response
                };
        
              default:
                throw new Error();
            }
          }

        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

        return (
            <Drawer
                anchor={"right"}
                open={panel}
                onClose={toggleDrawer}
            >
                <div style={{ width: "300px" }}>
                    <div>
                        <Formik
                            initialValues={{dashboarddata}}
                        //     onSubmit =
                        //  {
                        //    console.log(' handleSubmit')
                        //     //  handleSubmit()  
                        //  }
                            >
                            {/* {({ values, errors, touched, handleChange, handleBlur, handleSubmit,
                                setFieldValue, isSubmitting, }) => ( */}
                                {/* // <form onSubmit={handleSubmit}> */}
                                <Form onSubmit={handleSubmit}>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <label>Select Date</label>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                        />
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                        />
                                    </Col>
    
                                    <div className={classes.root}>
                                    <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Channels</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}></Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.secondaryHeading, classes.orange_color)}
                                                    >0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
             
                                            <Form.Group controlId="formBasicChecbox" className='checkbox-inner mb-0'>
                                                  {getChannel.map((item)=>(
                                                    
                                                    <Checkbox children={item.channel_name}
                                                    onChange={handleCheckbox}
                                                    name='channels' value={item.channel_name} >
                                                    </Checkbox>
                                                    ))}



                                                     </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
    
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Categorires</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.secondaryHeading, classes.orange_color)}
                                                    ></Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                                {/* <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                                                    <Checkbox children="Fake Customer Care No" />
                                                    <Checkbox children="Fake Job Promotions" />
                                                    <Checkbox children="Fake Offers" />
                                                </Form.Group> */}
                                                <Form.Group controlId="formBasicChecbox" className='checkbox-inner mb-0'>
                                                  {getCategory.map((item)=>(
                                                    
                                                    // <Checkbox children={item.category} name={item.category}
                                                    // value={item.category}
                                                    // ></Checkbox>
                                                    <Checkbox children={item.category}
                                                    onChange={handleCheckbox}
                                                    name='categories' value={item.category} >
                                                    </Checkbox>

                                                    // <Checkbox children={item.channel_name}
                                                    // onChange={handleCheckbox}
                                                    // name='channels' value={item.channel_name} >
                                                    // </Checkbox>
                                                 
                                                    ))}
                                                     </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
    
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Publishers</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={classes.secondaryHeading}></Typography>
                                                </div>
                                                <div className={classes.column}
    
                                                >
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                            <Form.Group controlId="formBasicChecbox" className='checkbox-inner mb-0'>
                                                  {getPublisher.map((item)=>(
                                                    
                                                 
                                                    // <Checkbox children={item.publisher} name='publisher' value={item.publisher} ></Checkbox>
                                                    <Checkbox children={item.publisher}
                                                    onChange={handleCheckbox}
                                                    name='publishers' value={item.publisher} >
                                                    </Checkbox>
                                                 
                                                    ))}
                                                     </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
    
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div
                                                    className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Countries</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}></Typography>
                                                </div>
                                                <div className={classes.column}>
                                               <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}> 1 Selected</Typography>
                                           
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                            <Form.Group controlId="formBasicChecbox" className='checkbox-inner mb-0'>
                                                  {getCountry.map((item)=>(
                                                    
                                                    // <Checkbox children={item.country} ></Checkbox>
                                                    // <Checkbox children={item.country} name='countries' value={item.country} ></Checkbox>
                                                    <Checkbox children={item.country}
                                                    onChange={handleCheckbox}
                                                    name='countries' value={item.country} >
                                                    </Checkbox>
                                                 
                                                    ))}
                                                     </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
    
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Brands</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}></Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.secondaryHeading, classes.orange_color)}
                                                    >0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                            <Form.Group controlId="formBasicChecbox" className='checkbox-inner mb-0'>
                                                  {getBrand.map((item)=>(
                                                    
                                                 
                                                    // <Checkbox children={item.brand} name='brand' value={item.brand} ></Checkbox>
                                                    <Checkbox children={item.brand}
                                                    onChange={handleCheckbox}
                                                    name='brands' value={item.brand} >
                                                    </Checkbox>
                                                    ))}
                                                     </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
    
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Priority</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.secondaryHeading, classes.orange_color)}
                                                    ></Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                           
                                                <Form.Group controlId="formBasicChecbox" className='checkbox-inner mb-0'>
                                                  {getPriorities.map((item)=>(
                                                    
                                         
                                                    // <Checkbox children={item.priority} name='priority' value={item.priority} ></Checkbox>
                                                    <Checkbox children={item.priority}
                                                    onChange={handleCheckbox}
                                                    name='priorities' value={item.priority} >
                                                    </Checkbox>
                                                    ))}
                                                     </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
    
                                    </div>
    
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Button type="submit"  className="w-100"
                                        onClick={handleSubmit}
                                        >
                                            Submit
                                        </Button>
                                    </Col>
    
                                </Form>
                            {/* )} */}
                        </Formik>
                    </div>
    
                </div>
            </Drawer>
        )
}

const mapStateToProps = (state) => {
      const { common } = state
      
      return {
        brand_list:
          common && common.brand_list ? common.brand_list : [],
          category_list:
          common && common.category_list ? common.category_list : [],
          channel_list:
          common && common.channel_list ? common.channel_list : [],
          priority_list:
          common && common.priority_list ? common.priority_list : [],
          publisher_list:
          common && common.publisher_list ? common.publisher_list : [],
          status_list:
          common && common.status_list ? common.status_list : [],
          country_name:
          common && common.country_name ? common.country_name : [],
      }
    }
  const mapDispatchToProps = channels => {
// return {...channels}
  }

export default connect(mapStateToProps)(FilterDrawer) 