"use client";

import { adminAction } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { UserRole } from "@prisma/client";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardHeader } from "@repo/ui/components/ui/card";
import { toast } from "@repo/ui/lib/sonner";

export default function AdminPage() {
  const onServerActionClick = async () => {
    const response = await adminAction();
    if (response.success) {
      toast.success(response.success);
    } else {
      toast.error(response.error);
    }
  };

  const onApiRouteClick = async () => {
    const response = await fetch("/api/admin");
    if (response.ok) {
      toast.success("API route called successfully!");
    } else {
      toast.error("Failed to call API route!");
    }
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl text-center font-semibold">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRoles={UserRole.ADMIN}>
          <FormSuccess message="You are authorized to access this content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
}
