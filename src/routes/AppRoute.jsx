import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import ForgotPassword from "../features/auth/ForgotPassword";
import ResetPassword from "../features/auth/ResetPassword";
import VerifyEmail from "../features/auth/VerifyEmail";

import Spinner from "../components/Spinner/spinner";

import ProtectedRoute from "./ProtectedRoute";
import { lazy } from "react";
import { Suspense } from "react";


const Dashboard = lazy(() => import("../pages/Dashboard"));
const Analytics = lazy(() => import("../pages/Analytics"));
const Users = lazy(() => import("../pages/Users"));
const Messages = lazy(() => import("../pages/Messages"));
const Settings = lazy(() => import("../pages/Settings"));

function AppRoutes() {
  return (
    <BrowserRouter>
     <Suspense fallback={<Spinner size="large" />}>
      <Routes>

        {/* Redirect */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Authentication */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />

          <Route
            path="/verify-email"
            element={<VerifyEmail />}
          />
        </Route>

        {/* Dashboard */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/analytics" element={<Analytics />} />

          <Route path="/users" element={<Users />} />

          <Route path="/messages" element={<Messages />} />

          <Route path="/settings" element={<Settings />} />
        </Route>

      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;


// this will be inefficient in page loading ,as it will try to download all pages at once
// import {
//   Dashboard,
//   Analytics,
//   Users,
//   Messages,
//   Settings,
// } from "../pages";

// so we will rather use lazy loading
