import Card from './Card';

const AdminCardLists = ({adminList}) => {

  return (
    <div className="admin-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        adminList && adminList.length > 0 ? (
          adminList.map((ad) => (
            <Card key={ad._id} admin={ad}/> 
          ))):(<p>No admins found.</p>)
      }
      
    </div>
  )
}

export default AdminCardLists
