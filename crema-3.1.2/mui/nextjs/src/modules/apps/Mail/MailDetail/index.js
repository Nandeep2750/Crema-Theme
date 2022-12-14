import React, {createRef, useEffect} from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import {useDispatch, useSelector} from 'react-redux';
import {
  onGetSelectedMail,
  onNullifyMail,
  onUpdateMailReadStatus,
} from '../../../../redux/actions';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppAnimate from '@crema/core/AppAnimate';
import {MailDetailSkeleton} from '@crema/core/AppSkeleton/MailDetailSkeleton';
import Box from '@mui/material/Box';
import {useRouter} from 'next/router';

const MailDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const contentRef = createRef();

  const {query} = router;
  const selectedMail = useSelector(({mailApp}) => mailApp.selectedMail);

  useEffect(() => {
    dispatch(onGetSelectedMail(query.all[query.all.length - 1]));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, query.all[query.all.length - 1]]);

  useEffect(() => {
    if (selectedMail && !selectedMail.isRead) {
      dispatch(onUpdateMailReadStatus([selectedMail.id], true));
    }
  }, [dispatch, selectedMail]);

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      ref={contentRef}
    >
      <AppsHeader>
        <MailDetailHeader history={router} selectedMail={selectedMail} />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin='transition.slideUpIn'>
          <MailDetailBody selectedMail={selectedMail} history={router} />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;
