import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `req` with the user's token.
  function middleware(req) {
    const token = req.nextauth.token;

    // check if token.isFirst exists
    if (token?.isFirst) {
      return NextResponse.redirect(
        new URL("/portal/auth/change_password", req.url)
      );
    }

    // check if pathname is of authentication and token exists
    if (req.nextUrl.pathname.includes("auth") && token?.token) {
      if (token.role === "student")
        return NextResponse.redirect(new URL("/portal/student/", req.url));
      else if (token.role === "lecturer")
        return NextResponse.redirect(new URL("/portal/lecturer/", req.url));
      return Next;
    }
    // check if paths collide
    // if the user is authenticated, and role is student while designated route is of kecturer, redirect to student dashboard
    if (
      token?.role === "student" &&
      req.nextUrl.pathname.includes("lecturer")
    ) {
      return NextResponse.redirect(new URL("/portal/student/", req.url));
    }

    // if the user is authenticated, and role is lecturer while designated route is of student, redirect to lecturer dashboard
    if (
      token?.role === "lecturer" &&
      req.nextUrl.pathname.includes("student")
    ) {
      return NextResponse.redirect(new URL("/portal/lecturer/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token?.token,
    },
    pages: {
      signIn: "/portal/auth/login",
      error: "/error",
    },
  }
);

export const config = {
  matcher: ["/portal/student/:path*", "/portal/lecturer/:path*"],
};
