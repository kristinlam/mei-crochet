import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { getOrders } from '../store/orders';
import FullPageLayout from '../layouts/FullPageLayout';
import Button from '../components/Button.js';

const AccountPage = () => {
  const { isAdmin, username } = useSelector((state) => state.auth);
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <FullPageLayout xCentered>
      <h1 className="text-center mb-10">Hello, {username}</h1>

      {isAdmin && (
        <div className="mb-12">
          <h2>Manage</h2>
          <div>
            <Link className="underline" to="/admin/users">
              Users
            </Link>
          </div>
          <div>
            <Link className="underline" to="/admin/patterns">
              Patterns
            </Link>
          </div>
        </div>
      )}

      <div className="mb-12">
        <h2>Order History</h2>
        <div>
          {orders.map((order) => (
            <div>{order.id}</div>
          ))}
        </div>
      </div>

      <Button border>
        <a href="/login" onClick={handleLogout}>
          Logout
        </a>
      </Button>
    </FullPageLayout>
  );
};

export default AccountPage;
