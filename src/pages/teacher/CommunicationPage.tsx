import React from 'react';
import PageNavigation from "@/components/common/PageNavigation";
import MessagingSystem from "@/components/messaging/MessagingSystem";

export default function CommunicationPage() {
  return (
    <div className="space-y-6">
      <PageNavigation />
      <MessagingSystem />
    </div>
  );
}
