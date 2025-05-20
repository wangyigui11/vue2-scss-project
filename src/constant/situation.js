import cardBg1 from '@/assets/cardBg1.png'
import cardBg2 from '@/assets/cardBg2.png'
import cardBg3 from '@/assets/cardBg3.png'
import cardBg4 from '@/assets/cardBg4.png'

import customTitle1 from '@/assets/customTitle1.png'
import customTitle2 from '@/assets/customTitle2.png'

export const cardBgMap = {
  bg1: cardBg1,
  bg2: cardBg2,
  bg3: cardBg3,
  bg4: cardBg4
}

export const cardCustomTitleMap = {
  title1: customTitle1,
  title2: customTitle2,
}

export const situationMap = {
  patientReception: {
    title: '患者接收综合态势',
    bgImg: cardCustomTitleMap.title1,
    
    
  },
  emergencyResponse: {
    title: '应急响应综合态势',
    bgImg: cardCustomTitleMap.title1
  },
  supportCapability: {
    title: '保障能力综合态势',
    bgImg: cardCustomTitleMap.title1
  },
  patientTreatment: {
    title: '患者诊治综合态势',
    bgImg: cardCustomTitleMap.title1
  },
  patientTransfer: {
    title: '患者流转综合态势',
    bgImg: cardCustomTitleMap.title1
  },

  classifyAnalysis: {
    title: '分类诊治分析',
    bgImg: cardCustomTitleMap.title2
  },
  gradeAnalysis: {
    title: '分级诊治分析',
    bgImg: cardCustomTitleMap.title2
  },
  genderAnalysis: {
    title: '性别分布',
    bgImg: cardCustomTitleMap.title2
  },
  ageAnalysis: {
    title: '年龄分布',
    bgImg: cardCustomTitleMap.title2
  },
  patientRegion: {
    title: '患者地区分布',
    bgImg: cardCustomTitleMap.title2
  },
};
