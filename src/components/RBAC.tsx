// src/components/RBAC.tsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';

interface RBACProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const RBAC: React.FC<RBACProps> = ({ allowedRoles, children }) => {
  const { role } = useAuth();

  if (allowedRoles.includes(role)) {
    return <>{children}</>;
  }

  return null;
};

export default RBAC;
