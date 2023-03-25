import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPatterns } from '../../store/patterns';
import FullPageLayout from '../../layouts/FullPageLayout';
import Pattern from '../../components/admin/Pattern';

const PatternControlPage = () => {
  const patterns = useSelector((state) => state.patterns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatterns());
  }, []);

  return (
    <FullPageLayout>
      <h1>Pattern Dashboard</h1>
      {patterns.map((pattern) => (
        <Pattern key={pattern.id} pattern={pattern} />
      ))}
    </FullPageLayout>
  );
};

export default PatternControlPage;
