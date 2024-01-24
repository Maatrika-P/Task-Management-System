import { authMiddleware } from "@clerk/nextjs";

const middleware = authMiddleware({
   // Add routes accessible to both signed-in and signed-out users here
});

export default middleware;

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};
