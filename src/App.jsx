import React from 'react';
import LayoutLeft from './components/LayoutLeft';
import routes from '@/routes';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import styles from './App.less';

function App() {
    return (
        <div className={styles.appLayout}>
            <LayoutLeft />
            <div className={styles.widthFull}>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                exact={index === 0}
                                path={route.path}
                                component={route.component}
                            />
                        );
                    })}
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    );
}

export default withRouter(App);
