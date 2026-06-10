# Notification System Design

## Stage 1

### Objective

Design a notification platform for students to receive real-time updates related to placements, events, and results.

### Core Actions

1. Fetch Notifications
2. Mark Notification as Read
3. Get Unread Notification Count
4. Filter Notifications by Type
5. Receive Real-Time Notifications

### API Design

#### GET /api/notifications

Fetch all notifications for a student.

#### Response

```json
{
  "notifications": [
    {
      "id": "uuid",
      "type": "Placement",
      "message": "Amazon is hiring",
      "isRead": false,
      "createdAt": "2026-04-22T17:50:00Z"
    }
  ]
}
```

#### PATCH /api/notifications/{id}/read

Mark a notification as read.

#### GET /api/notifications/unread-count

Returns unread notification count.

#### GET /api/notifications?type=Placement

Filter notifications by category.

### Real-Time Notification Delivery

The application will use WebSockets (Socket.IO) for real-time notification updates.

Workflow:

1. User opens application.
2. WebSocket connection established.
3. Server pushes notifications instantly.
4. UI updates without page refresh.
