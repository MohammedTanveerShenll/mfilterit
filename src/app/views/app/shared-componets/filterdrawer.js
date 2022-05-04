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
import { FetchFilterlist,FetchChannellist,FetchCountrylist,FetchCategorylist,FetchBrandlist,FetchPrioritylist,FetchPublisherlist,FetchStatuslist } from "../../../../redux/actions/CommonActions"
import moment from 'moment';
import { connect } from 'react-redux'


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
        const toggleDrawer = (e) => {
            setPanel(false)
        }
        const handleSubmit = (event) => {
        
            const target = event.target
            const value =  target.checked 
        const name = target.name
    
             setDashboarddata((state) => ({
            ...state,
              [name]: value
         }))
             console.log('saving data');
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
      console.log('my filter at drawer ',filters); 
    const date = new Date();
    const weekstartdate = date.setDate(date.getDate() - 6)
    const [startDate, setStartDate] = useState(weekstartdate);
    const [endDate, setEndDate] = useState(new Date());
    const classes = useStyles();
    localStorage.setItem("startDate", moment(new Date(startDate)).format('YYYY-MM-DD'));
    localStorage.setItem("endDate", moment(new Date(endDate)).format('YYYY-MM-DD'));
    // const handleSearch = (formData) => {
    //     handleSubmit(formData);
    //     console.log(localStorage.getItem("startDate"));
    //     console.log(localStorage.getItem("endDate"));
    // }

    // useEffect(() => {
    //     dispatch(FetchFilterlist(packageName))
    // }, [])

    // const filter_list = useSelector(state => state.common.filter_list)
    // // const loading = useSelector(state => state.dashboard.loading)
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
    console.log('drawer filter',filters);
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




        console.log('xxxxxxx getChannel xxxxxxxxx',getChannel); 
        console.log('xxxxxxx getCategory xxxxxxxxx',getCategory); 

//         const radioChange = (e,value,check,name) => {
//  [name][value]['selected_check'] = check;
//             // [secindex][name][qindex]['selected_answer'] = check;
//             console.log(check,'check');
//           }
        
  
        return (
            <Drawer
                anchor={"right"}
                open={panel}
                onClose={toggleDrawer}
            >
                <div style={{ width: "300px" }}>
                    <div>
                        <Formik
                            initialValues={{  }}
                            onSubmit={(values, { setSubmitting }) => {
                                handleSubmit(values);
                                // setSubmitting(false);
                            }}>
                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit,
                                setFieldValue, isSubmitting, }) => (
                                <form onSubmit={handleSubmit}>
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
                                                    
                                                    <Checkbox children={item.channel_name}  name='channel' value={item.channel_name} checked={item.channel_name}
                                                    ></Checkbox>
                                                   
                                                 
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
                                                    
                                                    <Checkbox children={item.category} ></Checkbox>
                                                   
                                                 
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
                                                    
                                                    <Checkbox children={item.publisher} ></Checkbox>
                                                   
                                                 
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
                                                    
                                                    <Checkbox children={item.country} ></Checkbox>
                                                   
                                                 
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
                                                    
                                                    <Checkbox children={item.brand} ></Checkbox>
                                                   
                                                 
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
                                                    
                                                    <Checkbox children={item.priority} ></Checkbox>
                                                   
                                                 
                                                    ))}
                                                     </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
    
                                    </div>
    
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Button type="submit" disabled={isSubmitting} className="w-100">
                                            Submit
                                        </Button>
                                    </Col>
    
                                </form>
                            )}
                        </Formik>
                    </div>
    
                </div>
            </Drawer>
        )
}

const mapStateToProps = (state) => {
      const { common } = state
       console.log('common', common)
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