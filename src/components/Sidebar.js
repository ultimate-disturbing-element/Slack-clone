import React from 'react'
import styled from 'styled-components';
import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import {useCollection} from 'react-firebase-hooks/firestore'
import {auth, db} from '../firebase';
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
    const [channels,loading,error] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);
    return (
       <SidebarContainer>
           <SidebarHeader>
               <SidebarInfo>
                   <h2>Code SpaceX</h2>
                   <h3>
                       <FiberManualRecordIcon/>
                     {user.displayName}
                   </h3>
               </SidebarInfo>
               <CreateIcon/>
           </SidebarHeader>
           <SidebarOption Icon={InsertComment} title="Threads"/>
           <SidebarOption Icon={Inbox} title="Mentions & reactions"/>
           <SidebarOption Icon={Drafts} title="Saved Items"/>
           <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
           <SidebarOption Icon={PeopleAlt} title="People & user Groups"/>
           <SidebarOption Icon={Apps} title="Apps"/>
           <SidebarOption Icon={FileCopy} title="File browser"/>
           <SidebarOption Icon={ExpandLess} title="Show less"/>

           <hr/>
           <SidebarOption Icon={ExpandMore} title="Channels"/>
           <hr/>

           <SidebarOption Icon={Add} addChannelOption  title="Add Channel"/>

           {
               channels?.docs.map((doc)=>(
                   <SidebarOption  title={doc.data().name} key={doc.id} id={doc.id}/>
               ))
           }

       </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
background-color: var(--slack-color);
color: white;
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;
>hr{
    margin-top: 10px;
    margin-bottom: 10px;
    border:1px solid #49274b;
}
`;

const SidebarHeader = styled.div`
display: flex;
border-bottom:1px solid #49274b;
padding: 13px;

> .MuiSvgIcon-root{
    padding: 8px;
    color:#49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`;

const SidebarInfo = styled.div`
flex: 1;
>h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}
> h3{
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
}

> h3 > .MuiSvgIcon-root{
    font-size:14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`;