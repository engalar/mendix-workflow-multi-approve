CREATE TABLE "approvals$workflowusertaskcontext" (
	"id" BIGINT NOT NULL,
	"iscountersign" BOOLEAN NULL,
	"approvalpersoncount" INT NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('2aa7ff32-460d-43fa-b1c3-f2061d663fda', 
'Approvals.WorkflowUserTaskContext', 
'approvals$workflowusertaskcontext', 
false, 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('186a05e4-6982-499c-b0ac-62297a466fc4', 
'2aa7ff32-460d-43fa-b1c3-f2061d663fda', 
'IsCountersign', 
'iscountersign', 
10, 
0, 
'false', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('55494916-8838-4f81-a382-fa48d45a6f13', 
'2aa7ff32-460d-43fa-b1c3-f2061d663fda', 
'ApprovalPersonCount', 
'approvalpersoncount', 
3, 
0, 
'0', 
false);
CREATE TABLE "approvals$workflowusertaskcontext_workflowusertask" (
	"approvals$workflowusertaskcontextid" BIGINT NOT NULL,
	"system$workflowusertaskid" BIGINT NOT NULL,
	PRIMARY KEY("approvals$workflowusertaskcontextid","system$workflowusertaskid"),
	CONSTRAINT "uniq_approvals$workflowusertaskcontext_workflowusertask_approvals$workflowusertaskcontextid" UNIQUE ("approvals$workflowusertaskcontextid"));
CREATE INDEX "idx_approvals$workflowusertaskcontext_workflowusertask_system$workflowusertask_approvals$workflowusertaskcontext" ON "approvals$workflowusertaskcontext_workflowusertask" ("system$workflowusertaskid" ASC,"approvals$workflowusertaskcontextid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('d0fc1436-dd7b-4651-9c43-08a0baaf6f5f', 
'Approvals.WorkflowUserTaskContext_WorkflowUserTask', 
'approvals$workflowusertaskcontext_workflowusertask', 
'2aa7ff32-460d-43fa-b1c3-f2061d663fda', 
'8a736dc8-91c1-48fd-bc12-57920ea8f046', 
'approvals$workflowusertaskcontextid', 
'system$workflowusertaskid', 
'idx_approvals$workflowusertaskcontext_workflowusertask_system$workflowusertask_approvals$workflowusertaskcontext');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_approvals$workflowusertaskcontext_workflowusertask_approvals$workflowusertaskcontextid', 
'd0fc1436-dd7b-4651-9c43-08a0baaf6f5f', 
'032c0409-f092-3ef4-91cc-d7f5a9a3d0f9');
CREATE TABLE "approvals$workflowusertaskcontext_mendixssouser_approverlist" (
	"approvals$workflowusertaskcontextid" BIGINT NOT NULL,
	"mendixsso$mendixssouserid" BIGINT NOT NULL,
	PRIMARY KEY("approvals$workflowusertaskcontextid","mendixsso$mendixssouserid"));
CREATE INDEX "idx_approvals$workflowusertaskcontext_mendixssouser_approverlist_mendixsso$mendixssouser_approvals$workflowusertaskcontext" ON "approvals$workflowusertaskcontext_mendixssouser_approverlist" ("mendixsso$mendixssouserid" ASC,"approvals$workflowusertaskcontextid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('9da0b36a-ef92-4fd0-bccd-0770c0cf5a5a', 
'Approvals.WorkflowUserTaskContext_MendixSSOUser_ApproverList', 
'approvals$workflowusertaskcontext_mendixssouser_approverlist', 
'2aa7ff32-460d-43fa-b1c3-f2061d663fda', 
'6fa22e07-7c9d-40c8-be8e-876280b8baf4', 
'approvals$workflowusertaskcontextid', 
'mendixsso$mendixssouserid', 
'idx_approvals$workflowusertaskcontext_mendixssouser_approverlist_mendixsso$mendixssouser_approvals$workflowusertaskcontext');
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20210521 09:51:47';
