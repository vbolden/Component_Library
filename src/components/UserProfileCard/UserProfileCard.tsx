import type { UserProfileCardProps } from '../../types/index.ts';

function UserProfileCard({ user, showEmail = true, showRole = true, onEdit, children }: UserProfileCardProps) {
    return (
        <div className="user-profile-card">
            <div className='content'>
                <img src={user.avatarUrl} alt={`${user.name}'s avatar`} className='avatar' />
                <h2>{user.name}</h2>
                {showEmail && <p className='email'>{user.email}</p>}
                {showRole && <p className='role'>{user.role}</p>}
            </div>
            {onEdit && <button onClick={() => onEdit(user.id)} className='edit'>Edit</button>}
            {children}
        </div>
    )
}

export default UserProfileCard;