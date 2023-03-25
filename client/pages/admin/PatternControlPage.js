import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPatterns } from '../../store/patterns';
import FullPageLayout from '../../layouts/FullPageLayout';
import Pattern from '../../components/admin/Pattern';
import PatternCreate from '../../components/admin/PatternCreate';

const PatternControlPage = () => {
  const patterns = useSelector((state) => state.patterns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatterns());
  }, []);

  return (
    <FullPageLayout>
      <h1 className="text-center mb-8">Pattern Dashboard</h1>
      <div className="mb-8">
        <h2>Create</h2>
        <PatternCreate />
      </div>

      <div>
        <h2>Update</h2>
        {patterns.map((pattern) => (
          <Pattern key={pattern.id} pattern={pattern} />
        ))}
      </div>
    </FullPageLayout>
  );
};

export default PatternControlPage;
