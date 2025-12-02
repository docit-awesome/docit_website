'use client';

import { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, CloudLightning, CloudSnow, CloudFog } from 'lucide-react';

export default function WeatherBanner() {
    const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=32.0853&longitude=34.7818&current=temperature_2m,weather_code'
                );
                const data = await response.json();
                setWeather({
                    temp: data.current.temperature_2m,
                    code: data.current.weather_code
                });
            } catch (error) {
                console.error('Failed to fetch weather:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    const getWeatherIcon = (code: number) => {
        if (code <= 1) return <Sun className="w-4 h-4 text-yellow-500" />;
        if (code <= 3) return <Cloud className="w-4 h-4 text-gray-400" />;
        if (code <= 48) return <CloudFog className="w-4 h-4 text-gray-400" />;
        if (code <= 67) return <CloudRain className="w-4 h-4 text-blue-400" />;
        if (code <= 77) return <CloudSnow className="w-4 h-4 text-blue-200" />;
        if (code <= 82) return <CloudRain className="w-4 h-4 text-blue-500" />;
        if (code <= 86) return <CloudSnow className="w-4 h-4 text-blue-200" />;
        if (code <= 99) return <CloudLightning className="w-4 h-4 text-yellow-600" />;
        return <Sun className="w-4 h-4 text-yellow-500" />;
    };

    if (loading) return (
        <div className="ml-4 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100 animate-pulse">
            <div className="w-16 h-4 bg-gray-200 rounded"></div>
        </div>
    );

    if (!weather) return null;

    return (
        <div className="ml-4 px-3 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 group cursor-default">
            <div className="group-hover:scale-110 transition-transform duration-300">
                {getWeatherIcon(weather.code)}
            </div>
            <div className="flex items-center gap-1 text-sm">
                <span className="font-bold text-gray-800">{Math.round(weather.temp)}°</span>
                <span className="text-gray-500 font-medium text-xs uppercase tracking-wider">TLV</span>
            </div>
        </div>
    );
}
