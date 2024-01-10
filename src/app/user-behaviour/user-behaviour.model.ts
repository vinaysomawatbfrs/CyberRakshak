export interface IAccessHour {
    text: string;
    value: number;
    isWorking: boolean;
  }
  
  export interface HotUrl {
    url: string;
    score: number;
    tag: string;
  }
  
  export interface Request {
    url: string;
    tag: string;
  }
  
  export interface Timestamps {
    created: string;
    updated: string;
  }
  
  export interface JourneyMapItem {
    score: number;
    meta: string;
    request: Request;
    timestamps: Timestamps;
  }
  
  export interface RiskAnalyticsItem {
    hits: number;
    at: string;
  }
  
  export interface AccessHoursItem {
    working_hours: number;
    non_working_hours: number;
  }
  
  export interface BehaviourAnalyticsResponse {
    risk_analytics: RiskAnalyticsItem[];
    access: AccessHoursItem;
    hot_urls: HotUrl[];
    journey_map: JourneyMapItem[];
  }