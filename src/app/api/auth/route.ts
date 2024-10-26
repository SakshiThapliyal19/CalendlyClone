import {nylas,nylasConfig} from "@/app/libs/nylas"
import {redirect} from "next/navigation";

export async function GET() {
  if (!nylasConfig.clientId) {
    // Handle the case when clientId is undefined
    console.error('clientId is undefined. Unable to redirect.');
    return new Response('Error: clientId is undefined', { status: 400 });
}
    const authUrl = nylas.auth.urlForOAuth2({
        clientId: nylasConfig.clientId, 
        redirectUri: nylasConfig.callbackUri, 
      });
      return redirect(authUrl);
}