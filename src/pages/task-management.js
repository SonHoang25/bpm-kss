import AppLayout from '../layouts/AppLayout';
import TaskManagement from '../containers/TaskManagement';

export default function Home() {
    return (
        <AppLayout>
            <TaskManagement />
        </AppLayout>
    );
}
