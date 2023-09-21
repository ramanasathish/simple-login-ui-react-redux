import { Routes, Route } from 'react-router-dom';

import { AuditList } from './';

export { AuditLayout };

function AuditLayout() {
    return (
        <div className="p-4">
            <div className="container">
                <Routes>
                    <Route index element={<AuditList />} />
                    
                </Routes>
            </div>
        </div>
    );
}
