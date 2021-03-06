import React, {  useState, useEffect } from 'react';
import "./index.scss";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useHistory } from "react-router-dom";
import data from "./data.json";
const useStyles = makeStyles({
    root: {
      "& .super-app":{
        display:"flex",
        justifyContent:"center",
        borderRadius:"100px",
        minWidth:"90px !important",
        minHeight:"30px !important",
        maxHeight:"30px !important",
        textAlign:"center",
        alignSelf:"center",
      },
      "& .super-app.inactive": {
        color: "#545F7D",
        background: "#e0e3eb",
        display:"flex",
        justifyContent:"center",
      
      },
      "& .super-app.active": {
        color: "#39CD62",
        background: "#ebfaef",
        display:"flex",
        justifyContent:"center",

      },
      "& .super-app.pending": {
        color: "#E9B200",
        background: "#fff9e6",
        display:"flex",
        justifyContent:"center",
      },
      "& .super-app.blacklisted": {
        color: "#E4033B",
        background: "#ffe6ec",
        display:"flex",
        justifyContent:"center",
      },
    },
  });
// const rows = [
//   { id: 1, organization: 'Hello', Username: 'World',Email:"hus@gmail.com",Phone:"08136668344",Date:"14/04/1997",Status:"Active" },
//   { id: 2, organization: 'Hello', Username: 'World',Email:"hus@gmail.com",Phone:"08136668344",Date:"14/04/1997",Status:"Inactive" },
//   { id: 3, organization: 'Hello', Username: 'World',Email:"hus@gmail.com",Phone:"08136668344",Date:"14/04/1997",Status:"Pending" },
//   { id: 4, organization: 'Hello', Username: 'World',Email:"hus@gmail.com",Phone:"08136668344",Date:"14/04/1997",Status:"Blacklisted" },
 
// ];
const view=<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4533 5.44011L15.452 5.43853C15.0399 4.92195 14.0949 3.82509 12.7977 2.85586C11.4993 1.88564 9.83832 1.03611 7.99968 1.03611C6.16104 1.03611 4.50011 1.88561 3.20166 2.85582C1.9029 3.82627 0.957158 4.92466 0.545819 5.44047C0.274826 5.76662 0.277249 6.2343 0.544833 6.57367L0.544827 6.57368L0.545641 6.57468C0.956296 7.08187 1.90229 8.17692 3.20172 9.14589C4.50012 10.1141 6.16105 10.9636 7.99968 10.9636C9.83832 10.9636 11.4993 10.1141 12.7977 9.1438C14.0967 8.17312 15.0425 7.07437 15.4538 6.55832C15.7074 6.24944 15.7071 5.74922 15.4533 5.44011ZM7.99968 9.75611C6.48691 9.75611 5.06807 9.02252 3.92942 8.17201C2.84501 7.36201 2.02502 6.4537 1.63351 5.9981C2.01625 5.53083 2.83628 4.6224 3.92306 3.81583C5.06351 2.96943 6.48657 2.24347 7.99968 2.24347C9.51274 2.24347 10.9317 2.96936 12.0701 3.81576C13.1557 4.62284 13.9761 5.53202 14.3662 5.99979C13.9762 6.46752 13.1557 7.3767 12.0701 8.18379C10.9317 9.0302 9.51274 9.75611 7.99968 9.75611Z" fill="#545F7D" stroke="#545F7D" stroke-width="0.2"/>
<path d="M8.00014 2.90818C6.29675 2.90818 4.9083 4.2967 4.9083 6.00002C4.9083 7.70334 6.29682 9.09186 8.00014 9.09186C9.70346 9.09186 11.092 7.70334 11.092 6.00002C11.092 4.29669 9.70346 2.90818 8.00014 2.90818ZM8.00014 7.88386C6.96726 7.88386 6.11646 7.0324 6.11646 6.00018C6.11646 4.96728 6.96732 4.1165 8.00014 4.1165C9.03296 4.1165 9.88382 4.96736 9.88382 6.00018C9.88382 7.033 9.03296 7.88386 8.00014 7.88386Z" fill="#545F7D" stroke="#545F7D" stroke-width="0.2"/>
</svg>

;
const blacklist=<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.08321 5.78713L6.08358 5.7875H6.125C6.84771 5.7875 7.54087 5.50023 8.05183 4.9893L7.98112 4.91859L8.05183 4.9893C8.56276 4.47837 8.85003 3.78519 8.85003 3.06247C8.85003 2.33974 8.56276 1.64659 8.05183 1.13564L7.98516 1.20231L8.05183 1.13564C7.5409 0.624706 6.84772 0.337439 6.125 0.337439C5.40227 0.337439 4.70913 0.624707 4.19817 1.13563L4.19817 1.13564C3.68724 1.64657 3.39997 2.33974 3.39997 3.06247V3.06255C3.40054 3.78527 3.68838 4.47782 4.19867 4.9887L4.19875 4.98878C4.69979 5.48925 5.37558 5.77575 6.08321 5.78713ZM4.47503 3.06258C4.47606 2.15406 5.20966 1.41783 6.11717 1.41249H6.125C6.79221 1.41249 7.39395 1.81469 7.64919 2.43084L7.64921 2.43087C7.90495 3.04756 7.76367 3.7576 7.29189 4.22935L7.3626 4.30007L7.29189 4.22936C6.8201 4.70114 6.11009 4.84242 5.49341 4.58668L5.49337 4.58666C4.87725 4.33145 4.47507 3.72976 4.47503 3.06258ZM1.36976 13.5052C1.47065 13.6061 1.60769 13.6625 1.74999 13.6625H10.5C10.6423 13.6625 10.7793 13.6061 10.8802 13.5052C10.9811 13.4043 11.0375 13.2673 11.0375 13.125L11.0375 11.375L11.0375 11.3749C11.0358 10.0725 10.5178 8.82375 9.5973 7.90272L9.59726 7.90268C8.67619 6.98218 7.4274 6.46421 6.12512 6.4625L6.12504 6.52398L6.125 6.46249H6.12499L6.12495 6.52296L6.12487 6.4625C4.82254 6.46417 3.57375 6.98219 2.65273 7.90268L2.65269 7.90273C1.73218 8.82379 1.21421 10.0726 1.2125 11.3749V11.375V13.125C1.2125 13.2673 1.26887 13.4043 1.36976 13.5052ZM9.96249 12.5875H2.2875V11.375C2.2875 10.0041 3.01876 8.73726 4.20617 8.0519L4.2062 8.05189C5.39368 7.36594 6.85619 7.36594 8.04366 8.05189L8.04369 8.0519C9.23117 8.73731 9.96236 10.0043 9.96236 11.375L9.96249 12.5875ZM12.2446 6.23463L11.6974 5.68751L12.2452 5.1397L12.2452 5.13971L12.2464 5.13854C12.4507 4.92746 12.4472 4.59222 12.2404 4.3848L12.2402 4.38457C12.0328 4.1778 11.6975 4.17427 11.4865 4.37863L11.4853 4.37976L10.9375 4.92757L10.3897 4.37976L10.3897 4.37975L10.3885 4.37863C10.1774 4.17426 9.84221 4.17782 9.63479 4.38457L9.63456 4.3848C9.42779 4.59222 9.42426 4.92746 9.62861 5.13854L9.6286 5.13855L9.62975 5.1397L10.1776 5.68751L9.62975 6.23532L9.62974 6.23531L9.62862 6.23647C9.42425 6.44756 9.4278 6.78279 9.63456 6.99022L9.63478 6.99044C9.84221 7.19721 10.1774 7.20074 10.3885 6.99639L10.3885 6.9964L10.3897 6.99525L10.9375 6.44744L11.4847 6.99461C11.5848 7.09837 11.7223 7.15718 11.8663 7.15852C12.0101 7.15986 12.1491 7.10283 12.2507 7.00076C12.3528 6.8992 12.4099 6.76017 12.4085 6.61626C12.4072 6.47227 12.3484 6.33478 12.2446 6.23463Z" fill="#545F7D" stroke="#545F7D" stroke-width="0.2"/>
</svg>

;
const activate=<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98844 6.61042L4.9883 6.61032C4.16917 5.99661 3.6376 5.01997 3.6376 3.91777C3.6376 2.10402 5.07432 0.625685 6.87096 0.557899L6.87141 0.554956H6.99998C8.85641 0.554956 10.3613 2.06095 10.3613 3.91726C10.3613 5.01894 9.82975 5.99541 9.01128 6.60916C9.01126 6.60917 9.01124 6.60919 9.01122 6.60921L8.8311 6.74442L9.04517 6.81481C9.04518 6.81482 9.04519 6.81482 9.0452 6.81482C9.86977 7.08578 10.6377 7.52127 11.3015 8.10107L11.3015 8.10111C11.4683 8.24689 11.4846 8.49091 11.3393 8.65726L11.339 8.65759C11.1928 8.82395 10.9489 8.83881 10.7831 8.69395L10.8767 8.58681L10.7831 8.69395C9.77092 7.80959 8.48183 7.30916 7.13928 7.27625H7.12746L7.12244 7.27643C7.08096 7.27795 7.03808 7.27953 6.99838 7.27953C6.95947 7.27953 6.9184 7.27802 6.87796 7.27653L6.87038 7.27625H6.85911C4.20631 7.34105 1.91033 9.24286 1.36801 11.8468L1.36796 11.8471C1.32757 12.0393 1.37682 12.2406 1.50067 12.3934L1.5188 12.4157C1.60005 12.5064 1.7639 12.6326 2.00101 12.6326H6.51279C6.73367 12.6326 6.9067 12.8061 6.9067 13.027C6.9067 13.2492 6.733 13.4209 6.51279 13.4209H2.00101C1.56642 13.4209 1.16332 13.2288 0.889327 12.892L0.889302 12.892C0.613528 12.5528 0.507874 12.1163 0.597436 11.6872L4.98844 6.61042ZM4.98844 6.61042L5.16885 6.74525M4.98844 6.61042L5.16885 6.74525M10.6969 12.9018L10.7105 12.9154L10.7147 12.9196L10.8019 13.0068C10.8005 13.008 10.7989 13.0093 10.7971 13.0107C10.7941 13.0131 10.7854 13.0199 10.7729 13.0263C10.7662 13.0295 10.7492 13.036 10.7387 13.0389C10.7222 13.0418 10.6806 13.0409 10.6563 13.0349C10.6421 13.0283 10.624 13.015 10.6075 13.0001C10.6386 12.9701 10.6679 12.938 10.6952 12.904L10.6969 12.9018ZM10.6969 12.9018L10.71 12.9116L10.7445 12.9375L10.7445 12.9375L10.8169 12.9918L10.8159 12.9931L10.8178 12.9909L10.8196 12.9889C10.8199 12.9886 10.8202 12.9882 10.8205 12.9878L10.6993 12.8991C10.6991 12.8994 10.6988 12.8998 10.6985 12.9001L10.6969 12.9018ZM5.16885 6.74525L4.95422 6.81591C4.95422 6.81591 4.95422 6.81591 4.95422 6.81591C4.19092 7.06717 3.47392 7.45838 2.84687 7.97401C1.69729 8.91932 0.899155 10.2389 0.59745 11.6872L5.16885 6.74525ZM4.42376 4.03523V3.91725C4.42376 2.50179 5.5796 1.34523 6.9947 1.34327L6.9947 1.34329H6.99881C8.41557 1.34329 9.57335 2.5001 9.57335 3.91727C9.57335 5.2906 8.48741 6.4205 7.12966 6.48821L7.12964 6.48794L7.12056 6.48894L7.11906 6.48911C7.07768 6.48803 7.03776 6.48748 6.99932 6.48748C6.9736 6.48748 6.94583 6.48798 6.91902 6.48847C6.90572 6.48871 6.89265 6.48895 6.88018 6.48912H6.87966L6.87807 6.48894L6.8781 6.48867L6.86894 6.48821C5.60286 6.42537 4.60496 5.42448 4.47602 4.16989L4.46218 4.03523H4.42376ZM13.057 8.81973L13.049 8.81168L12.9732 8.82387C12.8717 8.84017 12.781 8.89585 12.7176 8.98398L12.7175 8.98412L10.1837 12.5199C10.0909 12.6244 9.97132 12.6515 9.90539 12.6559L9.90482 12.6559C9.83814 12.6606 9.71301 12.6487 9.60694 12.5546L9.60672 12.5543L9.59842 12.5462L7.96615 10.9538C7.80784 10.799 7.56305 10.8035 7.40896 10.9611L7.40895 10.9611C7.25466 11.1189 7.25773 11.3629 7.41486 11.5175L7.41527 11.5179L9.05047 13.1136L9.05046 13.1136L9.05179 13.1148C9.27464 13.3271 9.5732 13.445 9.8793 13.445H9.88291C9.90315 13.445 9.92661 13.445 9.94875 13.4436V13.4437L9.95862 13.443C10.2896 13.4212 10.6004 13.2595 10.8092 13.0015L10.8101 13.0007L10.8149 12.9947L10.82 12.9884L10.8205 12.9878L10.8207 12.9879L10.8223 12.9858L10.8224 12.9858L10.8243 12.9831L13.3589 9.44383C13.359 9.4438 13.359 9.44378 13.359 9.44375C13.4881 9.26358 13.4461 9.02238 13.2683 8.89375C13.2028 8.84626 13.1292 8.82316 13.057 8.81973Z" fill="#545F7D" stroke="#545F7D" stroke-width="0.3"/>
</svg>

;
const Table=()=> {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [row, setRow] = useState([]);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    (async () => {
        const rows = data.map((x, index) => {
            return {
              id: x.seq,
              organization: x.organisation,
              Username: x.username,
              Email: x.email,
              Phone: x.phone,
              Date: x.date,
              Status: x.status    
            };
          });
          setRow(rows);
  
     
  
    })();

  },[]);
  const ITEM_HEIGHT = 48;
  const columns = [
    { field: 'organization', headerName: 'Organization', width: 120 },
    { field: 'Username', headerName: 'Username', width: 150 },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'Phone', headerName: 'Phone number', width: 150 },
    { field: 'Date', headerName: 'Date joined', width: 150 },
    {
        field: "Status",
        headerName: "Status",
        width: 100,
        headerClassName: "super-app-theme--header",
        cellClassName: (params) =>
        clsx("super-app", {
          inactive: params.value === "Inactive",
          active: params.value === "Active",
          pending: params.value === "Pending",
          blacklisted: params.value === "Blacklisted",
         
        }),
      },
    
    {
      field: "action",
      headerName: "",
      sortable: false,
      width: 50,
      headerClassName: "super-app-theme--header",
      align: "left",
      renderCell: (params) => {
        return (
          <div>
                  <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          
            <MenuItem  onClick={()=>{
            history.push(`/viewusers/${JSON.stringify(params.id)}`);
            handleClose();
                }}>
            <ListItemIcon>
            {view}
          </ListItemIcon>
          <ListItemText>View Details</ListItemText>
            </MenuItem>
            <MenuItem  onClick={handleClose}>
            <ListItemIcon>
            {blacklist}

          </ListItemIcon>
          <ListItemText>Blacklist User</ListItemText>
            </MenuItem>
            <MenuItem  onClick={handleClose}>
            <ListItemIcon>
          {activate}
            
          </ListItemIcon>
          <ListItemText>Activate User</ListItemText>

            </MenuItem>
       
        </Menu>
  
          </div>
        );
      },
    },
    
  ];
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ height: 600,marginTop:"2em", width: '98%',background:"#fff" }}>
    <DataGrid rows={row} columns={columns} />
  </div>
  );
}

export default Table;
