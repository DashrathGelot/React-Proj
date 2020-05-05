import {makeStyles} from '@material-ui/core'

const drawerWidth=230
export default makeStyles((theme)=>({
    root:{
        display:'flex',
    },
    nav:{
        width:'100%',
        height:'10%',   
        position:'fixed',
    },
    navShift:{
        width:`calc(100% - ${drawerWidth}px)`,
        marginLeft:drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          })
    },
    search:{
        display:'flex',
        position:'relative',
        justifyContent:'flex-end'
    },
    searchicon:{
        color:'grey',
    },
    dashboardicon:{
        fontSize:'0.8em'
    },
    header:{
        color:'black',
        flex:1,
    },
    menuitem:{
        margin: "0 5px",
        borderRadius: "2px",
        '&:hover':{
            color:'white',
            backgroundColor:'#9c27b0', 
            boxShadow:"0 4px 20px 0 rgba(0,0,0,0.14), 0 7px 10px -5px rgba(156,39,176,0.4)",
            transition: "all 200ms linear",
        }
    },

    //---- drawer styles ----

    drawer:{
        width:drawerWidth,
        height:'100%',
        flexShrink:0,
        backgroundImage: `url('./assert/city.jpg')`
    },
    drawerHeader:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        padding:theme.spacing(0,1),
        // content below to toolbar
        ...theme.mixins.toolbar,
        justifyContent:'flex-end',
    },
    drawerList:{
        width:'95%'
    },
    drawerListItem:{
        margin:"0 5px",
        borderRadius:"2px",
        '&:hover':{
            backgroundColor:'#9c27b0', 
            boxShadow:"0 4px 20px 0 rgba(0,0,0,0.14), 0 7px 10px -5px rgba(156,39,176,0.4)",
            transition: "all 200ms linear",
        }
    },

    //--========-- content --=========--

    content:{
        width:'92%', 
        marginTop:180,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: -drawerWidth+50,
    },
    contentShift:{ 
        width:'80%',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 10, 
    },

    // ---- inside content -----

    contentone:{
        padding:theme.spacing(2),
        marginBottom:35
    },
    mainPaper:{
        marginBottom:20
    },
    upperPaper:{
        width:35,
        height:40,
        backgroundColor:'#f5a002',
        padding:theme.spacing(3),
        borderRadius:'5px',
        boxShadow:"0 8px 25px 0 rgba(0,0,0,0.14), 0 16px 30px -3px rgba(156,39,176,0.4)",
        marginTop:-35,
        marginLeft:15,
    },
    contentIcon:{
        fontSize:35,
        color:'white'
    },
    contentHead:{
        color:'gray',
        padding:0,
    },
    contentData:{
        fontSize:"2em",
        padding:theme.spacing(1),
        fontWeight:100,
        wordWrap:"break-word"
    },
    contentAction:{
        padding:theme.spacing(2)
    },
    //===== chart ====
    mainchartcontent:{
        marginBottom:35
    },
    chart:{
        height:160,
        width:'80%',
        backgroundColor:'green',
        padding:theme.spacing(2),
        marginLeft:"7%",
        marginTop:-20,
        boxShadow:"0 8px 25px 0 rgba(0,0,0,0.14), 0 16px 30px -3px rgba(156,39,176,0.4)",
        borderRadius:'5px',
    },
    chartSubtitle:{
        padding:theme.spacing(2),
        wordWrap:"break-word"
    },
    chartSubtitleText:{
        fontSize:"1em",
        color:"gray",
    },

    //==== table-component ====

    tabbar:{
        backgroundColor:'#9c27b0',
        height:50,
        width:'100%',
        borderRadius:3,
        marginLeft:"3%",
        position:'relative',
        marginTop:-20,
        padding:theme.spacing(1),
        boxShadow:"0 8px 25px 0 rgba(0,0,0,0.14), 0 16px 30px -3px rgba(156,39,176,0.4)",
        color:'white'
    },
    tabpanel:{
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    indicator:{
        backgroundColor:'white',
    },
    tabpanelitem:{
        padding:'0 60px',
    },
    listitemtext:{
        padding:'0 30px'
    },
    cardheader:{
        backgroundColor:'#f5a002',
        width:'97%',
        marginLeft:'3%',
        borderRadius:5,
        height:35,
        marginTop:-20,
        boxShadow:"0 8px 25px 0 rgba(0,0,0,0.14), 0 16px 30px -3px rgba(156,39,176,0.4)",
        color:'white',
    },
    table:{
        padding:theme.spacing(4),
        paddingLeft:70
    },
}))
