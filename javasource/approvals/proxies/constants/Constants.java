// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package approvals.proxies.constants;

import com.mendix.core.Core;

public class Constants
{
	// These are the constants for the Approvals module

	/**
	* AppID must be updated to your app ID in order to use Feedback functionality. You can find your app ID in General Setting in Developer Portal.
	*/
	public static java.lang.String getAppID()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("Approvals.AppID");
	}
}