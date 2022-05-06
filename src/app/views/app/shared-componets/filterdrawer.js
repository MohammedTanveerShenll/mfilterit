/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from 'react'
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
import moment from 'moment';
import { connect } from 'react-redux'
import { values } from 'lodash';


 const FilterDrawer = ({category_list,
    channel_list,
    priority_list,
    publisher_list,
    status_list,
    country_name,
     brand_list}) => {
        const packageName = localStorage.getItem('dpackage');
        console.log('packageName drawer',packageName);
        const dispatch = useDispatch()
        const [panel, setPanel] = useState(true);
        
        const [dashboarddata, setDashboarddata] = useState(
{
    package_name: '', channels: [],categories:[],publishers:[],countries:[],brands:[],priority:[]
}
 );



 console.log("xxxxxxooooooxxxxxx",dashboarddata)

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

    // console.log('valuedefined^^^^^^^^^',valuedefined);

        const toggleDrawer = (e) => {
            setPanel(false)
        }


        const handleSubmit = (e) => {
          e.target.preventDefault();
          console.log('submit');
          // dispatch({type: constant.DASHBOARD_DATA, DashboardData: dashboarddata})
            // const { name, checked } = e.target
            // setDashboarddata((values) => ({ ...values, [name]: checked }))
            // console.log('submitn,,');      
   
        }

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([])
    let checkedArray = []
if (selectedCheckboxes) {
    checkedArray.push(
       selectedCheckboxes
    )
}


        const handleCheckbox = (event) => {
            const { name, checked ,value} = event.target
            const test = dashboarddata && dashboarddata.name
            && dashboarddata.name.filter(x =>  x !== value ? x : null )



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
    
     
         console.log('channnnnels',channels);
         console.log('catyttegories',categories);
         console.log('countries',countries);
         console.log('brands',brands);
         console.log('priorities',priorities);
         console.log('publishers',publishers);
       
        
     
       
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
      // console.log('my filter at drawer ',filters); 
    const date = new Date();
    const weekstartdate = date.setDate(date.getDate() - 6)
    const [startDate, setStartDate] = useState(weekstartdate);
    const [endDate, setEndDate] = useState(new Date());
    const classes = useStyles();
    localStorage.setItem("startDate", moment(new Date(startDate)).format('YYYY-MM-DD'));
    localStorage.setItem("endDate", moment(new Date(endDate)).format('YYYY-MM-DD'));

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
        dispatch(FetchCountrylist(packageName,'2021-01-10','2022-01-10'))
         dispatch(FetchCategorylist(packageName,'2021-01-10','2022-01-10'))
        dispatch(FetchChannellist(packageName,'2021-01-10','2022-01-10'))
       dispatch(FetchBrandlist(packageName,'2021-01-10','2022-01-10')) 
          dispatch(FetchPrioritylist(packageName,'2021-01-10','2022-01-10'))
         dispatch(FetchPublisherlist(packageName,'2021-01-10','2022-01-10'))
         dispatch(FetchStatuslist(packageName,'2021-01-10','2022-01-10'))

    }, [])
    // console.log('drawer filter',filters);
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
             console.log('my filter at drawer',filters); 


           
           
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




        // console.log('xxxxxxx getChannel xxxxxxxxx',getChannel); 
        // console.log('xxxxxxx getCategory xxxxxxxxx',getCategory); 


        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        // console.log('my channels ashakljljkl dashboard',dashboarddata);
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
      //  console.log('common', common)
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
  const mapDispatchToProps = (dispatch) => ({
    //  getBrandDipatch : (params) =>   dispatch(FetchBrandlist(params)),
    
    // getUserTypeDispatch: (params) => dispatch(userTypesActions.getUserType(params)),
    // deleteUsertypeDispatch: (params) => dispatch(deleteUsertypeActions.deleteUsertype(params)),
    // getUsertypeDetailsDispatch: (data) =>
    //   dispatch(userTypeDetailsActions.getUsertypeDetails(data)),
    // clearUsertypeDetailsDispatch: () =>
    //   dispatch(userTypeDetailsActions.clearUsertypeDetails()),
    // clearDeleteUsertypeDispatch: () => dispatch(deleteUsertypeActions.clearDeleteUsertype())
  })

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrawer) 