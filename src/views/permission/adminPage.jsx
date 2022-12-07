import React from 'react';
import TypingCard from '@/components/TypingCard'
const AdminPage = () => {
  const cardContent = `这个页面只有admin角色才可以访问，guest和editor角色看不到`
  return (
    <div className="app-container">
      <TypingCard title='admin' source={cardContent}/>
    </div>
  );
}

export default AdminPage;
