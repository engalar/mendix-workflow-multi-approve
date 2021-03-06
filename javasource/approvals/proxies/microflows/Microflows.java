// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package approvals.proxies.microflows;

import java.util.HashMap;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.MendixRuntimeException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class Microflows
{
	// These are the microflows for the Approvals module
	public static void approveRequest(IContext context, approvals.proxies.Request _request, system.proxies.WorkflowUserTask _workflowUserTask)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Request", _request == null ? null : _request.getMendixObject());
		params.put("WorkflowUserTask", _workflowUserTask == null ? null : _workflowUserTask.getMendixObject());
		Core.microflowCall("Approvals.ApproveRequest").withParams(params).execute(context);
	}
	public static void createNewRequest(IContext context)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		Core.microflowCall("Approvals.CreateNewRequest").withParams(params).execute(context);
	}
	public static void oNC_ApprovalUserTask(IContext context, system.proxies.WorkflowUserTask _userTask, approvals.proxies.Request _request)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("UserTask", _userTask == null ? null : _userTask.getMendixObject());
		params.put("Request", _request == null ? null : _request.getMendixObject());
		Core.microflowCall("Approvals.ONC_ApprovalUserTask").withParams(params).execute(context);
	}
	public static void rejectRequest(IContext context, approvals.proxies.Request _request, system.proxies.WorkflowUserTask _workflowUserTask)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Request", _request == null ? null : _request.getMendixObject());
		params.put("WorkflowUserTask", _workflowUserTask == null ? null : _workflowUserTask.getMendixObject());
		Core.microflowCall("Approvals.RejectRequest").withParams(params).execute(context);
	}
	public static void saveRequest(IContext context, approvals.proxies.Request _request)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Request", _request == null ? null : _request.getMendixObject());
		Core.microflowCall("Approvals.SaveRequest").withParams(params).execute(context);
	}
	public static void setToApproved(IContext context, approvals.proxies.Request _request)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Request", _request == null ? null : _request.getMendixObject());
		Core.microflowCall("Approvals.SetToApproved").withParams(params).execute(context);
	}
	public static void setToRejected(IContext context, approvals.proxies.Request _request)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Request", _request == null ? null : _request.getMendixObject());
		Core.microflowCall("Approvals.SetToRejected").withParams(params).execute(context);
	}
	public static approvals.proxies.WorkflowUserTaskContext sUB_GetCurrentUserTaskContext(IContext context, system.proxies.WorkflowUserTask _userTask)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("UserTask", _userTask == null ? null : _userTask.getMendixObject());
		IMendixObject result = (IMendixObject)Core.microflowCall("Approvals.SUB_GetCurrentUserTaskContext").withParams(params).execute(context);
		return result == null ? null : approvals.proxies.WorkflowUserTaskContext.initialize(context, result);
	}
}