import React from 'react';
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Category,
    DataLabel,
    ColumnSeries,
    Legend,
    Tooltip,
} from '@syncfusion/ej2-react-charts';

import {
    barCustomSeries,
    barPrimaryXAxis,
    barPrimaryYAxis,
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const Bar = () => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader title="Olympic Medal Counts - RIO" category="Bar" />
            <ChartComponent
                id="bar-chart"
                height="420px"
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
            >
                <Inject
                    services={[
                        ColumnSeries,
                        Category,
                        Tooltip,
                        DataLabel,
                        Legend,
                    ]}
                />
                <SeriesCollectionDirective>
                    {barCustomSeries.map((i, index) => (
                        <SeriesDirective key={index} {...i} />
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
};

export default Bar;
