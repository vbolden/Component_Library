import type {UserProfileCardProps} from '../../types/index.ts';

function UserProfileCard ({ user, showEmail = true, showRole = true, onEdit, children }: UserProfileCardProps) {
    return (
        <div className="user-profile-card">
            <img src={user.avatarUrl} alt={`${user.name}'s avatar}`} />
            <h2>{user.name}</h2>
            {showEmail && <p>{user.email}</p>}
            {showRole && <p>{user.role}</p>}
            {onEdit && <button onClick={() => onEdit(user.id)}>Edit</button>}
            {children}
        </div>
    )
}

export default UserProfileCard;